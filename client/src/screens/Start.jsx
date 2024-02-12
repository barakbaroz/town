import Lottie from "lottie-react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LanguageBar from "../components/User/LanguageBar";
import Adina_Background from "../assets/Lotties/Adina_Background.json";
import { Translator } from "../components/Translation";
import { postAnalytics } from "../analytics";
import Transition from "../Transition";
import { buttonCSS, desktopCss } from "../components/general.style";

export default function Start() {
  const handleLegalLinkClick = () => {
    postAnalytics({ type: "opened-tos" });
  };

  const handleStartClick = () => {
    postAnalytics({ type: "start-button-clicked" });
  };

  return (
    <Transition>
      <StartContainer>
        <LanguageBar />
        <Nurse id="startPageNurse" />
        <ParagraphWrapper id="ParagraphWrapper">
          <Title id="HelloTitle">
            <Translator>Start-Title</Translator>
          </Title>
          <Paragraph id="StartParagraph">
            <Translator>Start-Paragraph</Translator>
          </Paragraph>
        </ParagraphWrapper>
        <BottomContentContainer>
          <StartButton
            id="StartButton"
            to="../CharacterSelection"
            onClick={handleStartClick}
          >
            <Translator>Next</Translator>
          </StartButton>
          <LegalTextWrapper>
            <Translator>Start-Legal-Explain</Translator>
            &nbsp;
            <LegalLink
              id="LegalLink"
              to="../Legal"
              onClick={handleLegalLinkClick}
            >
              <Translator>Start-Legal-Link</Translator>
            </LegalLink>
          </LegalTextWrapper>
        </BottomContentContainer>
      </StartContainer>
    </Transition>
  );
}
Start;

const StartContainer = styled.div`
  ${desktopCss}
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  padding-inline: 22px;
  padding-block-end: 1.2rem;
  padding-block-start: 4px;
  box-sizing: border-box;
  justify-content: space-between;
`;

const Nurse = styled(Lottie).attrs({ animationData: Adina_Background })`
  width: 270px;
  height: 186px;
  max-width: 100%;
`;

const Title = styled.h1`
  font-size: 1.75rem;
  margin: 0;
  text-align: center;
`;

const BottomContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1.1875rem;
  margin-block: 0;
  text-align: center;
  margin-inline: 25px;
`;

const StartButton = styled(Link)`
  ${buttonCSS}
  padding-block: 0.594rem;
  padding-inline: 4.563rem;
  box-shadow: 0px 3px 6px #00000029;
`;

const LegalLink = styled(Link)`
  color: inherit;
  cursor: pointer;
  font-weight: 500;
`;
const LegalTextWrapper = styled.p`
  font-size: 1rem;
  margin-block: 0;
`;
const ParagraphWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.656rem;
`;
