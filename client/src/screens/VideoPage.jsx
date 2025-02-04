import styled from "styled-components";
import Lottie from "lottie-react";
import Player from "../components/Video/Player";
import { useRef, useState } from "react";
import SatisfactionQuestions from "../components/Instructions/SatisfactionQuestions";
import LanguageBar from "../components/User/LanguageBar";
import { Translator } from "../components/Translation";
import NutritionalGuidelines from "../components/Instructions/NutritionalGuidelines";
import DontForget from "../components/Instructions/DontForget";
import Consent from "../components/Instructions/Consent";
import arrow_up from "../assets/Icons/arrow_up.svg";
import nurseLottie from "../assets/Lotties/Nurse_Small.json";
import MedicinesChanges from "../components/Instructions/MedicinesChanges";
import Transition from "../Transition";
import { postAnalytics } from "../analytics";
import Share from "../components/Instructions/Share";

export default function VideoPage() {
  const [showFeedback, setShowFeedback] = useState(false);
  const videoRef = useRef(null);

  const handleAutoPlay = () => {
    if (!videoRef.current) return;
    postAnalytics({ type: "back-to-top" });
    videoRef.current.play();
  };

  return (
    <Transition>
      <Container>
        <Desktop>
          <StyledLanguageBar />
          <Title id="video-title">
            <Translator>Video-Title</Translator>
          </Title>
          <Player
            onPlayerPlaying={() => setShowFeedback(true)}
            videoRef={videoRef}
          />
          <VideoInteraction>
            <Share />
            <SatisfactionQuestions videoStarted={showFeedback} />
          </VideoInteraction>

          <NutritionalGuidelines />
          <MedicinesChanges />
          <DontForget />
          <Consent />

          <NurseLottie animationData={nurseLottie} loop />
          <ScrollButton href="#video-title" onClick={handleAutoPlay}>
            <img src={arrow_up} alt="arrowUp" />
            <Translator>Video-Back-To-Video</Translator>
            <span style={{ width: "19px" }} />
          </ScrollButton>

          <Divider />

          <Footer>
            <Translator>Footer</Translator>
          </Footer>
        </Desktop>
      </Container>
    </Transition>
  );
}

const Container = styled.div`
  --screen-margin: 23px;
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

const Desktop = styled.div`
  max-width: 800px;
  margin-inline: auto;
`;

const StyledLanguageBar = styled(LanguageBar)`
  margin-inline: var(--screen-margin);
`;

const Title = styled.h1`
  margin-block: 2.125rem 1.813rem;
  font-size: 1.5rem;
  font-weight: 500;
  margin-inline: var(--screen-margin);
`;

const VideoInteraction = styled.div`
  display: flex;
  flex-direction: column;
  gap: 27px;
  justify-content: end;
  margin-block-start: 14px;
  margin-block-end: 40px;
  margin-inline: var(--screen-margin);
`;

const ScrollButton = styled.a`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  text-align: center;
  font-size: 1.125rem;
  width: calc(100% - 50px);
  max-width: 12.25rem;
  cursor: pointer;
  color: #ffffff;
  background-color: #7a9dfd;
  border: none;
  padding-block: 0.688rem;
  padding-inline: 27px;
  border-radius: 50px;
  align-self: center;
  font-family: inherit;
  margin-inline: auto;
`;

const Divider = styled.div`
  height: 1px;
  background-color: #84a4fc;
  margin-block-start: 35px;
  margin-block-end: 41px;
  margin-inline: var(--screen-margin);
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
  margin-inline: auto;
`;
