import styled from "styled-components";
import { LanguageContext, Translator } from "../Translation";
import download_consent from "../../assets/Icons/download_Informed_consent.svg";
import { useContext } from "react";
import consents from "../../assets/Consents";
import postAnalytics from "../../utilities/postAnalytics";
import { useParams } from "react-router-dom";

function Consent() {
  const { language } = useContext(LanguageContext);
  const { userId } = useParams();
  const handleConsentClick = () => {
    postAnalytics({
      userId,
      type: `instructions-consent-clicked`,
    });
  };

  return (
    <Container>
      <Title>
        <Translator>consent-title</Translator>
      </Title>
      <Text>
        <Translator>consent-text</Translator>
      </Text>

      <ClickableConsent href={consents[language]} target="_blank">
        <ConsentIcon src={download_consent} onClick={handleConsentClick} />
        <ConsentText onClick={handleConsentClick}>
          <Translator>consent-download</Translator>
        </ConsentText>
      </ClickableConsent>
    </Container>
  );
}

export default Consent;

const Container = styled.div`
  color: #444444;

  /* The same as the margin on the DontForget component container */
  padding-inline: 20px;
  padding-block-start: 2.375rem;
`;
const Title = styled.h2`
  margin-block-start: 0;
  margin-block-end: 0.9375rem;
`;
const Text = styled.div`
  font-size: 1.1875rem;
`;

const ClickableConsent = styled.a`
  text-decoration: none;
  color: #444444;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  margin-block-start: 15px;
`;
const ConsentIcon = styled.img`
  width: 5rem;
  height: 5rem;
`;
const ConsentText = styled.div`
  font-size: 1.0625rem;
  font-weight: 500;
`;
