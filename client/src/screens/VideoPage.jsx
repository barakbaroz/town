import styled from "styled-components";
import Player from "../components/Video/Player";
import { useState, Fragment } from "react";
import VideoButtons from "../components/Instructions/VideoButtons";
import SatisfactionQuestions from "../components/Instructions/SatisfactionQuestions";
import LanguageBar from "../components/User/LanguageBar";
import medicationsIcon from "../assets/Icons/drugs.png";
import dietIcon from "../assets/Icons/diet.png";
import activityIcon from "../assets/Icons/activity.png";
import { Translator } from "../components/Translation";

function VideoPage() {
  const [showFeedback, setShowFeedback] = useState(false);

  return (
    <Container>
      <ContentWrapper>
        <LanguageBar />
        <Title>
          <Translator>Video-Title</Translator>
        </Title>
      </ContentWrapper>
      <Player setShowFeedback={setShowFeedback} />
      <ContentWrapper>
        <ShareWrapper>
          <VideoButtons />
        </ShareWrapper>
        <SatisfactionQuestions videoStarted={showFeedback} />
        <InstructionsTitle>
          <Translator>Video-Routine-Title</Translator>
        </InstructionsTitle>
        {Object.values(routinesInstructions).map(
          ({ icon, paragraph }, index) => (
            <Fragment key={index}>
              <RoutineWrapper>
                <img src={icon} alt={icon} />
                <RoutineText>
                  <Translator>{paragraph}</Translator>
                </RoutineText>
              </RoutineWrapper>
              <Divider />
            </Fragment>
          )
        )}
      </ContentWrapper>
      <Footer>
        <Translator>Footer</Translator>
      </Footer>
    </Container>
  );
}

export default VideoPage;

const routinesInstructions = {
  medications: {
    icon: medicationsIcon,
    paragraph: ["Video-Routine-Medications"],
  },
  diet: {
    icon: dietIcon,
    paragraph: ["Video-Routine-Diet"],
  },
  activity: {
    icon: activityIcon,
    paragraph: ["Video-Routine-Activity"],
  },
};

const Container = styled.div`
  background: transparent
    linear-gradient(
      180deg,
      #ffffff 0%,
      #f1f4fb 10%,
      #e3e8f6 53%,
      #f5f7fc 85%,
      #ffffff 100%
    )
    0% 0% no-repeat padding-box;
  padding-block-end: 57px;
`;

const ContentWrapper = styled.div`
  padding-inline: 25px;
`;

const Title = styled.p`
  text-align: start;
  font-size: 1.375rem;
  font-weight: 500;
  margin-block-start: 2.125rem;
  margin-block-end: 1.813rem;
`;

const ShareWrapper = styled.div`
  justify-content: end;
  margin-block-start: 1.125rem;
`;

const Divider = styled.div`
  height: 1px;
  border-radius: 2px;
  background-color: #84a4fb;
  margin-block-end: 35px;
  margin-block-start: 35px;
  opacity: 0.3;
`;

const InstructionsTitle = styled.p`
  text-align: start;
  font-size: 1.375rem;
  font-weight: 700;
  margin-block-start: 4.063rem;
  margin-block-end: 2.25rem;
`;

const RoutineWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
`;

const RoutineText = styled.p`
  text-align: start;
  font-size: 1.188rem;
  font-weight: 400;
  margin-block: 0;
`;

const Footer = styled.footer`
  font-weight: 500;
  text-align: center;
  font-size: 1.5rem;
  padding-inline: 44px;
`;
