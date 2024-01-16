import styled from "styled-components";
import { Translator } from "../Translation";
import { Card, Icon, Title, TopSection } from "./Card.Style";
import { buttonCSS } from "../general.style";
import nutrition from "../../assets/Icons/nutrition.svg";
import { useUser } from "../../providers/UserProvider";
import { postAnalytics } from "../../analytics";
import InstructionsSteps from "./InstructionsSteps";
import { useLanguage } from "../../providers/LanguageProvider";

const FullLongDateAndTime = {
  dateStyle: "full",
  timeStyle: "short",
};

export default function NutritionalGuidelines() {
  const { Case } = useUser();
  const { procedureDateAndTime } = Case;
  const { language } = useLanguage();

  const handlePersonalNutritionClick = () => {
    postAnalytics({ type: "nutrition-instruction-clicked" });
  };

  return (
    <Card>
      <TopSection>
        <Title>
          <Translator>Nutritional-Instructions-Title</Translator>
        </Title>
        <Icon src={nutrition} alt="nutrition" />
      </TopSection>

      <Text>
        <Translator>Nutritional-Instructions-Preview</Translator>
      </Text>
      <Text>
        <Translator>Nutritional-Instructions-scheduled</Translator>{" "}
        {procedureDateAndTime.toLocaleString(
          `${language}-US`,
          FullLongDateAndTime
        )}
      </Text>

      <InstructionsSteps />

      <StyledButton href="#" onClick={handlePersonalNutritionClick}>
        <Translator>Nutritional-Instructions-Download</Translator>
      </StyledButton>
    </Card>
  );
}

const Text = styled.p`
  margin: 0;
  margin-block-end: 1.125rem;
  font-size: 1.188rem;
`;

const StyledButton = styled.a`
  text-align: center;
  ${buttonCSS}
`;
