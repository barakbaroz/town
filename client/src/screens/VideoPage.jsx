import styled from "styled-components";
import Player from "../components/Video/Player";
import { useState } from "react";
import VideoButtons from "../components/Instructions/VideoButtons";
import SatisfactionQuestions from "../components/Instructions/SatisfactionQuestions";
import LanguageBar from "../components/User/LanguageBar";
import { Translator } from "../components/Translation";
import NutritionalGuidelines from "../components/Instructions/NutritionalGuidelines";
import ConsultDoctor from "../components/Instructions/ConsultDoctor";
import DontForget from "../components/Instructions/DontForget";
import Consent from "../components/Instructions/Consent";
import CallCenter from "../components/Instructions/CallCenter";

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
      <VideoInteraction>
        <VideoButtons />
        <SatisfactionQuestions videoStarted={showFeedback} />
      </VideoInteraction>

      <CardsWrapper>
        <NutritionalGuidelines />
        <ConsultDoctor />
        <DontForget />
        <Consent />
      </CardsWrapper>

      <ScrollSectionWrapper>
        {/* <NurseImage src="" alt="nurseImage" /> */}
        <ScrollButton>
          <Translator>חזרה לסרטון</Translator>
        </ScrollButton>
      </ScrollSectionWrapper>

      <CallCenter />
      <Divider />

      <Footer>
        <Translator>Footer</Translator>
      </Footer>
    </Container>
  );
}

export default VideoPage;

const Container = styled.div`
  --screen-margin: 25px;
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
  padding-block-end: 35px;
`;

const StyledLanguageBar = styled.div`
  margin-inline: var(--screen-margin);
`;

const Title = styled.p`
  text-align: start;
  font-size: 1.375rem;
  font-weight: 500;
  margin-block-start: 2.125rem;
  margin-block-end: 1.813rem;
  margin-inline: var(--screen-margin);
`;

const ScrollSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-block: 35px;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;
`;

const VideoInteraction = styled.div`
  display: flex;
  flex-direction: column;
  gap: 27px;
  justify-content: end;
  margin-block-start: 18px;
  margin-inline: var(--screen-margin);
`;

const ScrollButton = styled.button`
  --content-height: 1.625rem;
  font-size: 1.125rem;
  min-width: 15.625rem;
  cursor: pointer;
  color: #ffffff;
  background-color: #7a9dfd;
  border: none;
  padding-block: 0.688rem;
  padding-inline: 27px;
  border-radius: 50px;
  align-self: center;
  font-family: inherit;
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: #84a4fc;
  margin-block-start: 35px;
  margin-block-end: 41px;
  opacity: 0.2;
`;

const Footer = styled.footer`
  font-weight: 500;
  text-align: center;
  font-size: 1.375rem;
  padding-inline: 70px;
`;
