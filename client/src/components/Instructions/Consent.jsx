import styled from "styled-components";
import { Card, Icon, Title, TopSection } from "./Card.Style";
import { Translator } from "../Translation";
import consentForm from "../../assets/Icons/consent_form.svg";
import { Button } from "../general.style";

function Consent() {
  return (
    <Card>
      <TopSection>
        <Title>
          <Translator>Consent-Title</Translator>
        </Title>
        <Icon src={consentForm} alt="consentForm" />
      </TopSection>

      <Text>
        <Translator>Consent-Information</Translator>
      </Text>

      <Button>
        <Translator>Consent-Download</Translator>
      </Button>
    </Card>
  );
}

export default Consent;

const Text = styled.p`
  margin: 0;
  margin-block-end: 1.188rem;
  font-size: 1.188rem;
`;
