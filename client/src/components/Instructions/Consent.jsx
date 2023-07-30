import styled from "styled-components";
import { Card, Icon } from "./style";
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

      <DoctorFormDownload>
        <Translator>Consent-Download</Translator>
      </DoctorFormDownload>
    </Card>
  );
}

export default Consent;

const TopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block-start: 1.25rem;
  padding-block-end: 0.734rem;
`;
const Title = styled.h1`
  margin: 0;
  font-size: 1.375rem;
`;

const Text = styled.p`
  margin: 0;
  margin-block-end: 1.188rem;
`;

const DoctorFormDownload = styled(Button)`
  --content-height: 1.625rem;
  font-size: 1.125rem;
  cursor: pointer;
  color: #ffffff;
  background-color: #f02a4c;
  border: none;
  padding-block: 0.688rem;
  padding-inline: 27px;
  border-radius: 50px;
  align-self: center;
  font-family: inherit;
`;
