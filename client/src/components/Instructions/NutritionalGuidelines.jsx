import styled from "styled-components";
import { Translator } from "../Translation";
import { Card, Icon, Title, TopSection } from "./Card.Style";
import { buttonCSS } from "../general.style";
import nutrition from "../../assets/Icons/nutrition.svg";
import { useUser } from "../../providers/UserProvider";
import merokenMorningPdf from "../../assets/Pdfs/NutritionalInstructions/hebrew/morning/meroken.pdf";
import moviprepMorningPdf from "../../assets/Pdfs/NutritionalInstructions/hebrew/morning/moviprep.pdf";
import picolaxMorningPdf from "../../assets/Pdfs/NutritionalInstructions/hebrew/morning/picolax.pdf";
import merokenEveningPdf from "../../assets/Pdfs/NutritionalInstructions/hebrew/evening/meroken.pdf";
import moviprepEveningPdf from "../../assets/Pdfs/NutritionalInstructions/hebrew/evening/moviprep.pdf";
import picolaxEveningPdf from "../../assets/Pdfs/NutritionalInstructions/hebrew/evening/picolax.pdf";
import { postAnalytics } from "../../analytics";

const pdfs = {
  morning: {
    meroken: merokenMorningPdf,
    moviprep: moviprepMorningPdf,
    picolax: picolaxMorningPdf,
  },
  evening: {
    meroken: merokenEveningPdf,
    moviprep: moviprepEveningPdf,
    picolax: picolaxEveningPdf,
  },
};

function NutritionalGuidelines() {
  const { Case } = useUser();
  const { concentrate, procedureTime } = Case;
  const hours = procedureTime.split(":")[0];
  const dayTime = hours >= 15 ? "evening" : "morning";

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

      <StyledButton
        href={pdfs[dayTime][concentrate]}
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
  text-align: center;
  ${buttonCSS}
`;
