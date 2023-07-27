import styled from "styled-components";
import { Translator } from "../Translation";
import InstructionsSteps from "./InstructionsSteps";

function NutritionalGuidelines() {
  return (
    <Container>
      <TopSection>
        <Title>
          <Translator>הנחיות תזונתיות</Translator>
        </Title>
        <img src="" alt="image" />
      </TopSection>

      <Text>
        <Translator>
          לקראת הבדיקה שלך חשוב מאוד להקפיד על ההנחיות התזונתיות - יש לך תפקיד
          חשוב בהצלחת הבדיקה!
        </Translator>
      </Text>
      <Text>
        <Translator>
          הבדיקה שלך נקבעה ליום ראשון, 19.05.23 בשעה 00:00
        </Translator>
      </Text>

      <InstructionsSteps />

      <InstructionsDownload>
        <Translator>הנחיות מותאמות אישית להורדה</Translator>
      </InstructionsDownload>
    </Container>
  );
}

export default NutritionalGuidelines;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding-inline: 27px;
  padding-block-start: 20px;
  padding-block-end: 35px;
`;
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
`;
const InstructionsDownload = styled.button`
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
