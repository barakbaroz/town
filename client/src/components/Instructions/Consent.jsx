import styled from "styled-components";
import { Translator } from "../Translation";

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
        <ConsentIcon>{/* image will be placed here */}</ConsentIcon>
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
  padding-block: 2rem;
`;
const Title = styled.h2``;
const Text = styled.div``;

const ClickableConsent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
`;
const ConsentIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #f02a4c;
`;
const ConsentText = styled.div``;
