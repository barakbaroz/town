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
    <Container id="Container">
      <TopContent id="TopContent">
        <HeaderText id="HeaderText">
          <Translator>Dismiss-Header</Translator>
        </HeaderText>
        <Content id="Content">
          <Translator>Dismiss-Paragraph</Translator>
        </Content>
        <Doctor src={dismissDoctor} id="Doctor" />
      </TopContent>
      <Divider id="Divider" />
      <AttentionText>
        <Translator>Dismiss-PayAttention</Translator>
      </AttentionText>
      <Actions id="Actions">
        <ButtonContainer
          id="ButtonContainer"
          href={consents[language]}
          target="_blank"
        >
          <ImageIcon src={downloadInstructions} id="ImageIcon" />
          <Translator>Dismiss-Button-Consent</Translator>
        </ButtonContainer>
        <ButtonContainer href="Instructions#SurgeryInstructions">
          <ImageIcon src={downloadInformedConsent} />
          <Translator>Dismiss-Button-Instructions</Translator>
        </ButtonContainer>
        <ButtonContainer href="Instructions">
          <ImageIcon src={reWatch} />
          <Translator>Dismiss-Button-WatchVideo</Translator>
        </ButtonContainer>
      </Actions>
    </Container>
  );
};
export default Dismiss;
const Container = styled.div`
  height: 100%;
  color: #444444;
  direction: rtl !important;
  font-family: "Assistant";
`;
const TopContent = styled.div`
  background-image: url(${dismissBackground});
  padding-inline: 1.875rem;
  padding-block: 1.875rem;
  position: relative;
  background-size: cover;
  min-height: 21.25rem;
  width: 100%;
  height: 23.75rem;
`;
const HeaderText = styled.p`
  padding-inline-end: 5rem;
  padding-block-end: 2.875rem;
  font-weight: 600;
`;
const Content = styled.div`
  padding-inline-end: 5rem;
  font-weight: 620;
`;
const Doctor = styled.img`
  margin-inline-start: 10rem;
`;
const AttentionText = styled.p`
  margin-block-start: 0.5rem;
  margin-block-end: 1.5rem;
  padding-inline-start: 2.375rem;
  font-family: "Abraham";
`;
const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-block-end: 3.375rem;
  white-space: pre-wrap;
  padding-inline: 1.875rem;
`;
const ButtonContainer = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  color: black;
  text-align: center;
`;
const ImageIcon = styled.img`
  width: 4.125rem;
  height: 4.125rem;
`;
const Divider = styled.div`
  height: 1px;
  border-radius: 2px;
  background-color: #707070;
`;
