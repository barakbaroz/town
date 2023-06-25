import styled from "styled-components";
import dismissDoctor from "../assets/Avatars/dismissDoctor.svg";
import downloadInformedConsent from "../assets/Icons/downloadInformedConsent.svg";
import downloadInstructions from "../assets/Icons/downloadInstructions.svg";
import reWatch from "../assets/Icons/reWatch.svg";
import dismissBackground from "../assets/Backgrounds/dismissBackground.svg";
import { LanguageContext, Translator } from "../components/Translation";
import consents from "../assets/Consents";
import { useContext } from "react";

const Dismiss = () => {
  const { language } = useContext(LanguageContext);
  return (
    <>
      <Container id="Container">
        <Inner id="Inner">
          <HeaderText id="HeaderText">
            <Translator>Dismiss-Header</Translator>
          </HeaderText>
          <Content id="Content">
            <Translator>Dismiss-Paragraph</Translator>
          </Content>
          <Doctor src={dismissDoctor} />
        </Inner>
        <AttentionText>
          <Translator>Dismiss-PayAttention</Translator>
        </AttentionText>
        <Actions id="Actions">
          <ButtonContainer id="ButtonContainer">
            <RoundButton
              id="RoundButton"
              href={consents[language]}
              target="_blank"
            >
              <img src={downloadInstructions} />
            </RoundButton>
            <ButtonText>
              <Translator>Dismiss-Button-Consent</Translator>
            </ButtonText>
          </ButtonContainer>
          <ButtonContainer>
            <RoundButton href="Instructions#SurgeryInstructions">
              <img src={downloadInformedConsent} />
            </RoundButton>
            <ButtonText>
              <Translator>Dismiss-Button-Instructions</Translator>
            </ButtonText>
          </ButtonContainer>
          <ButtonContainer>
            <RoundButton href="Instructions">
              <img src={reWatch} />
            </RoundButton>
            <ButtonText>
              <Translator>Dismiss-Button-WatchVideo</Translator>
            </ButtonText>
          </ButtonContainer>
        </Actions>
      </Container>
    </>
  );
};
export default Dismiss;
const Container = styled.div`
  height: 100%;
  color: #444444;
  direction: rtl !important;
  font-family: "Assistant";
`;
const Inner = styled.div`
  padding-inline: 2.5rem;
  padding-block: 1.875rem;
  position: relative;
  border-radius: 0 0 1.875rem 0;
  background-image: url(${dismissBackground});
  background-size: cover;
  min-height: 21.25rem;
`;
const Content = styled.div`
  width: 10.625rem;
  height: 6.625rem;
  border-radius: 15px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  background: rgba(255, 255, 255, 0.5);
  margin-block-start: 2.063rem;
  padding-inline: 1.25rem;
  padding-block: 0.625rem;
  color: black;
  white-space: pre-line;
  font-weight: 620;
`;
const Doctor = styled.img`
  position: absolute;
  bottom: 0;
  margin-inline-start: 10rem;
`;
const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 1.875rem;
  padding-inline: 2.5rem;
  margin-block-start: 1.25rem;
  white-space: pre-wrap;
`;
const RoundButton = styled.a`
  background-color: #f02a4c;
  border-radius: 50%;
  width: 4.125rem;
  height: 4.125rem;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  margin-block-end: 0.625rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 600;
`;
const ButtonText = styled.div`
  display: flex;
  height: 2.188rem;
  text-align: center;
`;
const AttentionText = styled.p`
  padding-inline-start: 2.375rem;
  font-family: "Abraham";
`;
const HeaderText = styled.p`
  padding-inline-end: 5rem;
  padding-block: 1.875rem;
  font-weight: 600;
  white-space: "pre-line";
`;
