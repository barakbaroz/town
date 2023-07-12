import styled from "styled-components";
import Player from "../components/Video/Player";
import { useState, Fragment } from "react";
import VideoButtons from "../components/Instructions/VideoButtons";
import SatisfactionQuestions from "../components/Instructions/SatisfactionQuestions";
import LanguageBar from "../components/User/LanguageBar";
import medicationsIcon from "../assets/Video/drugs.png";
import dietIcon from "../assets/Video/diet.png";
import activityIcon from "../assets/Video/activity.png";
import { Translator } from "../components/Translation";

function VideoPage() {
  const [showFeedback, setShowFeedback] = useState(false);

  return (
    <Container>
      <StyledLanguageBar>
        <LanguageBar />
      </StyledLanguageBar>
      <Title>
        <Translator>Video-Title</Translator>
      </Title>
      <Player setShowFeedback={setShowFeedback} />
      <ShareWrapper>
        <VideoButtons />
      </ShareWrapper>
      <SatisfactionQuestions videoStarted={showFeedback} />
      <InstructionsTitle>
        <Translator>Video-Routine-Title</Translator>
      </InstructionsTitle>
      {routinesInstructions.map(({ icon, paragraph }, index) => (
        <Fragment key={index}>
          <RoutineWrapper>
            <img src={icon} alt={icon} />
            <RoutineText>
              <Translator>{paragraph}</Translator>
            </RoutineText>
          </RoutineWrapper>
          <Divider />
        </Fragment>
      ))}
      <Footer>
        <Translator>Footer</Translator>
      </Footer>
    </Container>
  );
}

export default VideoPage;

const routinesInstructions = [
  {
    icon: medicationsIcon,
    paragraph: "Video-Routine-Medications",
  },
  {
    icon: dietIcon,
    paragraph: "Video-Routine-Diet",
  },
  {
    icon: activityIcon,
    paragraph: "Video-Routine-Activity",
  },
];

const Container = styled.div`
  --screen-texts-padding: 25px;
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
const StyledLanguageBar = styled.div`
  padding-inline: var(--screen-texts-padding);
`;

const Title = styled.p`
  text-align: start;
  font-size: 1.375rem;
  font-weight: 500;
  margin-block-start: 2.125rem;
  margin-block-end: 1.813rem;
  padding-inline: var(--screen-texts-padding);
`;

const ShareWrapper = styled.div`
  justify-content: end;
  margin-block-start: 18px;
  padding-inline: var(--screen-texts-padding);
`;

const Divider = styled.div`
  height: 1px;
  background-color: #84a4fb;
  margin-block-end: 35px;
  margin-block-start: 35px;
  margin-inline: var(--screen-texts-padding);
  opacity: 0.3;
`;

const InstructionsTitle = styled.p`
  text-align: start;
  font-size: 1.375rem;
  font-weight: 700;
  margin-block-start: 65px;
  margin-block-end: 36px;
  padding-inline: var(--screen-texts-padding);
`;

const RoutineWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
  padding-inline: var(--screen-texts-padding);
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
