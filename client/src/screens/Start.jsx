import { useEffect } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import LanguageBar from "../components/User/LanguageBar";
import MatotLandingPage from "../assets/Avatars/Matot_LandingPage.svg";
import { Translator } from "../components/Translation";
import postAnalytrics from "../functions/postAnalytics";

const Start = () => {
  const { userId } = useParams();

  const handleLegalLinkClick = () => {
    postAnalytrics({ userId, type: "opened-tos" });
  };

  const handleStartClick = () => {
    postAnalytrics({ userId, type: "start-button-clicked" });
  };

  useEffect(() => {
    postAnalytrics({ userId, type: "opened-sms" });
  }, [userId]);

  return (
    <StartContainer id="StartContainer">
      <LanguageBar />
      <Nurse id="MatotLandingPage" src={MatotLandingPage} />
      <TextsContainer id="TextsContainer">
        <Title id="HelloTitle">
          <Translator>Start-Title</Translator>
        </Title>
        <Paragraph id="StartParagraph">
          <Translator>Start-Paragraph</Translator>
        </Paragraph>
      </TextsContainer>
      <BottomContentContainer>
        <StartButton
          id="StartButton"
          to="../CharacterSelection"
          onClick={handleStartClick}
        >
          <Translator>Start-Button</Translator>
        </StartButton>
        <div>
          <Translator>Start-Legal-Explain</Translator>
          &nbsp;
          <LegalLink
            id="LegalLink"
            to="../Legal"
            onClick={handleLegalLinkClick}
          >
            <Translator>Start-Legal-Link</Translator>
          </LegalLink>
        </div>
      </BottomContentContainer>
    </StartContainer>
  );
};
export default Start;

const StartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100dvh - var(--header-size));
  width: 100vw;
  background: linear-gradient(#ffffff, #f1f4fb, #e3e8f6, #f5f7fc, #ffffff);
  padding: 1.2rem;
  box-sizing: border-box;
  justify-content: space-evenly;
`;

const Nurse = styled.img`
  width: 20rem;
  max-width: 100%;
  align-self: center;
`;

const Title = styled.h1`
  font-size: 1.625rem;
  margin: 0;
`;

const BottomContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  align-items: center;
`;

const Paragraph = styled.p`
  font-size: 1.1875rem;
  padding-block-start: 0.813rem;
  text-align: center;
`;

const StartButton = styled(Link)`
  text-decoration: none;
  background-color: #f02a4c;
  border-radius: 3rem;
  border: none;
  color: #ffffff;
  padding: 0.5rem 3rem;
  font-size: 1.063rem;
  font-family: inherit;
`;

const LegalLink = styled(Link)`
  color: #84a4fb;
  cursor: pointer;
`;
