import styled from "styled-components";
import { Card, Icon, Title, TopSection } from "./Card.Style";
import { Translator } from "../Translation";
import consentForm from "../../assets/Icons/consent_form.svg";
import { buttonCSS } from "../general.style";
import { postAnalytics } from "../../analytics";

export default function Consent() {
  const handleConsentClick = () =>
    postAnalytics({ type: `instructions-consent-clicked` });

  return (
    <Card>
      <TopSection>
        <Title>
          <Translator>Consent-Title</Translator>
        </Title>
        <Icon src={consentForm} alt="consentForm" />
      </TopSection>

      <Text>
        <Translator>Consent-Paragraph</Translator>
      </Text>

      <ConsentLink href="#" onClick={handleConsentClick}>
        <Translator>Consent-Download</Translator>
      </ConsentLink>
    </Card>
  );
}

const Text = styled.p`
  margin: 0;
  margin-block-end: 2.188rem;
  font-size: 1.188rem;
`;

const ConsentLink = styled.a`
  ${buttonCSS}
`;
