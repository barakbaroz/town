import styled from "styled-components";
import dismissDoctor from "../assets/Avatars/dismissDoctor.svg";
import downloadInformedConsent from "../assets/Icons/download_Informed_consent.svg";
import downloadInstructions from "../assets/Icons/download_instruction.svg";
import reWatch from "../assets/Icons/reWatch.svg";
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
        <Wrapper>
          <Content id="Content">
            <Translator>Dismiss-Paragraph</Translator>
          </Content>
          <Doctor src={dismissDoctor} id="Doctor" />
        </Wrapper>
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
          <ImageIcon src={downloadInformedConsent} id="ImageIcon" />
          <ButtonText>
            <Translator>Dismiss-Button-Consent</Translator>
          </ButtonText>
        </ButtonContainer>
        <ButtonContainer href="Instructions#SurgeryInstructions">
          <ImageIcon src={downloadInstructions} />
          <ButtonText>
            <Translator>Dismiss-Button-Instructions</Translator>
          </ButtonText>
        </ButtonContainer>
        <ButtonContainer href="Instructions">
          <ImageIcon src={reWatch} />
          <ButtonText>
            <Translator>Dismiss-Button-WatchVideo</Translator>
          </ButtonText>
        </ButtonContainer>
      </Actions>
    </Container>
  );
};
export default Dismiss;
const Container = styled.div`
  padding-inline: 30px;
  background: transparent
    linear-gradient(
      180deg,
      #ffffffc4 0%,
      #e3e8f6c4 50%,
      #f5f7fcc4 85%,
      #ffffffc4 100%
    )
    0% 0% no-repeat padding-box;
`;
const TopContent = styled.div`
  background-size: cover;
`;

const Content = styled.div`
  font-weight: 500;
  font-size: 1.188rem;
`;
const Doctor = styled.img`
  max-width: 45%;
  align-self: flex-end;
`;
const AttentionText = styled.p`
  margin-block-start: 0.688rem;
  margin-block-end: 1.563rem;
  font-family: "Abraham";
`;
const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-block-end: 3.375rem;
  white-space: pre-wrap;
  gap: 43px;
`;
const ButtonContainer = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.875rem;
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
const HeaderText = styled.p`
  font-size: 1.188rem;
  width: 80%;
  margin-block-start: 0;
  margin-block-end: 1.375rem;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const ButtonText = styled.div`
  font-size: 1rem;
`;
