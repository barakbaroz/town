import styled from "styled-components";
import { Translate, Translator } from "../components/Translation";
import Player from "../components/Video/Player";
import { useState } from "react";
import VideoButtons from "../components/Instructions/VideoButtons";
import SatisfactionQuestions from "../components/Instructions/SatisfactionQuestions";
import SurgeryInstructions from "../components/Instructions/SurgeryInstructions";
import DontForget from "../components/Instructions/DontForget";
import Consent from "../components/Instructions/Consent";
import LanguageBar from "../components/User/LanguageBar";

function VideoPage() {
  const [showFeedback, setShowFeedback] = useState(false);

  const watchedVideo = null;
  const signedConfirmation = null;
  const points = 0;

  const getTitle = () => {
    const titleType =
      points === 0 && watchedVideo && !signedConfirmation ? "sign" : "default";
    return `video-page-${titleType}-title`;
  };

  const getSubtitle = () => {
    if (points > 0) return "video-page-AnsweredOneYes";
    const watchedVideoString = watchedVideo
      ? "watchedVideo"
      : "notWatchedVideo";
    const SignedString = signedConfirmation
      ? "signedConfirmation"
      : "notSignedConfirmation";
    return `video-page-subtitle-answeredAllNo-${watchedVideoString}-${SignedString}`;
  };

  return (
    <Container>
      <StyledLanguageBar>
        <LanguageBar />
      </StyledLanguageBar>
      <VideoPreviewTexts>
        <Title>
          <Translator>{getTitle()}</Translator>
        </Title>

        <Subtitle>{Translate(getSubtitle())}</Subtitle>
      </VideoPreviewTexts>

      <Player setShowFeedback={setShowFeedback} />
      <ShareWrapper>
        <VideoButtons />
      </ShareWrapper>
      <SatisfactionQuestions videoStarted={showFeedback} />

      <BlueWrapper>
        <SurgeryInstructions />
        <DontForget />
      </BlueWrapper>

      <Consent />

      <Divider />

      <Footer>
        <Translator>Footer</Translator>
      </Footer>
    </Container>
  );
}

export default VideoPage;

const Container = styled.div`
  --screen-texts-padding: 26px;
  padding-block-start: 20px;
  padding-block-end: 65px;
`;

const StyledLanguageBar = styled.div`
  padding-inline: var(--screen-texts-padding);
`;

const VideoPreviewTexts = styled.div`
  margin-inline: var(--screen-texts-padding);
`;

const Title = styled.h1`
  font-size: 1.625rem;
  font-weight: 500;
`;

const Subtitle = styled.h3.attrs(({ children }) => {
  if (
    children ===
    "video-page-subtitle-answeredAllNo-watchedVideo-signedConfirmation"
  )
    return { style: { display: "none" } };
})`
  font-weight: 400;
  font-size: 1.1875rem;
  margin-inline-start: 0.9375rem;
  margin-inline-end: 1.3125rem;
`;

const ShareWrapper = styled.div`
  text-align: start;
  display: flex;
  justify-content: flex-end;
  gap: 0.25rem;
  margin-block-start: 0.6875rem;
  margin-inline: var(--screen-texts-padding);
`;

const BlueWrapper = styled.div`
  background-color: #84a4fc;
  border-radius: 0 20px 0 20px;
  margin-block-start: 2.375rem;
  padding: var(--screen-texts-padding);
  color: #ffffff;
`;

const Footer = styled.footer`
  font-weight: 500;
  text-align: center;
  color: #444444;
  font-size: 1.5rem;
  padding-inline: 1.2rem;
`;

const Divider = styled.div`
  height: 1px;
  border-radius: 2px;
  background-color: #d6d6d6;
  margin-block: 34px;
  margin-inline: var(--screen-texts-padding);
`;
