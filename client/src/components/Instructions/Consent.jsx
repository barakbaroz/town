import styled from "styled-components";
import { Translator } from "../Translation";
import download_consent from "../../assets/Icons/download_ Informed_consent.svg";

function Consent() {
  return (
    <Container>
      <Title>
        <Translator>consent-title</Translator>
      </Title>
      <Text>
        <Translator>consent-text</Translator>
      </Text>

      <ClickableConsent>
        <ConsentIcon src={download_consent} />
        <ConsentText>
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
  padding-block: 2.625rem;
`;
const Title = styled.h2`
  margin-block-start: 0;
  margin-block-end: 1.2rem;
`;
const Text = styled.div`
  font-size: 1.125rem;
`;

const ClickableConsent = styled.div`
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
