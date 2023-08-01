import styled from "styled-components";
import { Translator } from "../Translation";
import InstructionsSteps from "./InstructionsSteps";
import { Card, Icon } from "./style";
import { Button } from "../general.style";
import nutrition from "../../assets/Icons/nutrition.svg";

function NutritionalGuidelines() {
  const examinationDate = new Intl.DateTimeFormat("he-IL", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(new Date());

  return (
    <Card>
      <TopSection>
        <Title>
          <Translator>Nutritional-Guidelines-Title</Translator>
        </Title>
        <Icon src={nutrition} alt="nutrition" />
      </TopSection>

      <Text>
        <Translator>Nutritional-Guidelines-Preview</Translator>
      </Text>
      <Text>
        <Translator>הבדיקה שלך נקבעה ל</Translator>
        <span>{examinationDate}</span>
      </Text>

      <InstructionsSteps />

      <InstructionsDownload>
        <Translator>Nutritional-Guidelines-Download</Translator>
      </InstructionsDownload>
    </Card>
  );
}

export default NutritionalGuidelines;

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
  margin-block-end: 1.125rem;
`;
const InstructionsDownload = styled(Button)``;
