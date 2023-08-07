import styled from "styled-components";
import { Translator } from "../Translation";
import InstructionsSteps from "./InstructionsSteps";
import { Card, Icon, Title, TopSection } from "./Card.Style";
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

      <Button>
        <Translator>Nutritional-Guidelines-Download</Translator>
      </Button>
    </Card>
  );
}

export default NutritionalGuidelines;

const Text = styled.p`
  margin: 0;
  margin-block-end: 1.125rem;
`;
