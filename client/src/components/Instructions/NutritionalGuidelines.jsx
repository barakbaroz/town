import styled from "styled-components";
import { Translator } from "../Translation";
import InstructionsSteps from "./InstructionsSteps";
import { Card, Icon, Title, TopSection } from "./Card.Style";
import { buttonCSS } from "../general.style";
import nutrition from "../../assets/Icons/nutrition.svg";
import { useUser } from "../../providers/UserProvider";
import merokenPdf from "../../assets/Pdfs/NutritionalInstructions/hebrew/meroken.pdf";
import moviprepPdf from "../../assets/Pdfs/NutritionalInstructions/hebrew/moviprep.pdf";
import picolaxPdf from "../../assets/Pdfs/NutritionalInstructions/hebrew/picolax.pdf";
import { postAnalytics } from "../../analytics";

const pdfs = {
  meroken: merokenPdf,
  moviprep: moviprepPdf,
  picolax: picolaxPdf,
};

function NutritionalGuidelines() {
  const { Case } = useUser();
  const { procedureDate, procedureTime, concentrate } = Case;
  const procedureDateTime = new Date(procedureDate);

  const [hours, minutes] = procedureTime.split(":").map(Number);
  const examinationDateAndTime = new Date(
    procedureDateTime.getFullYear(),
    procedureDateTime.getMonth(),
    procedureDateTime.getDate(),
    hours,
    minutes
  );

  const examinationDate = new Intl.DateTimeFormat("he-IL", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(new Date(examinationDateAndTime));

  const handlePersonalNutritionClick = () => {
    postAnalytics({ type: "nutrition-instruction-clicked" });
  };
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

      <StyledButton
        href={pdfs[concentrate]}
        onClick={handlePersonalNutritionClick}
      >
        <Translator>Nutritional-Guidelines-Download</Translator>
      </StyledButton>
    </Card>
  );
}

export default NutritionalGuidelines;

const Text = styled.p`
  margin: 0;
  margin-block-end: 1.125rem;
  font-size: 1.188rem;
`;

const StyledButton = styled.a`
  margin-block-start: 1.125rem;
  text-align: center;
  ${buttonCSS}
`;
