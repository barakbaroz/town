import styled from "styled-components";
import Lottie from "lottie-react";
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
import arrow_up from "../assets/Icons/arrow_up.svg";
import nurseLottie from "../assets/Lotties/Nurse_Small.json";
import Cpap from "../components/Instructions/Cpap";

const lottieOptions = { animationData: nurseLottie, loop: true };

function VideoPage() {
  const [showFeedback, setShowFeedback] = useState(false);

  return (
    <Container>
      <StyledLanguageBar>
        <LanguageBar />
      </StyledLanguageBar>
      <Title id="video-title">
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
        <Cpap show={true} />
        <DontForget />
        <Consent />
      </CardsWrapper>

      <ScrollSectionWrapper>
        <NurseLottie {...lottieOptions} />
        <ScrollButton href="#video-title">
          <img src={arrow_up} alt="arrowUp" />
          <Translator>חזרה לסרטון</Translator>
          <span></span>
        </ScrollButton>
      </ScrollSectionWrapper>

      <Divider />
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
  margin-inline: var(--screen-margin);
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
  margin-block-end: 45px;
  margin-inline: var(--screen-margin);
`;

const ScrollButton = styled.a`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  text-align: center;
  --content-height: 1.625rem;
  font-size: 1.125rem;
  width: calc(100% - 50px);
  max-width: 15rem;
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
  margin-inline: 25px;
  opacity: 0.2;
`;

const Footer = styled.footer`
  font-weight: 500;
  text-align: center;
  font-size: 1.375rem;
  padding-inline: 70px;
`;

const NurseLottie = styled(Lottie)`
  width: 130px;
  max-width: 100%;
  margin-block-end: 22px;
`;
