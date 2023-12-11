import styled from "styled-components";
import { Translator } from "../Translation";
import { Card, Icon, Title, TopSection } from "./Card.Style";
import { buttonCSS } from "../general.style";
import nutrition from "../../assets/Icons/nutrition.svg";
import { useUser } from "../../providers/UserProvider";
import merokenPdf from "../../assets/Pdfs/NutritionalInstructions/hebrew/meroken.pdf";
import moviprepPdf from "../../assets/Pdfs/NutritionalInstructions/hebrew/moviprep.pdf";
import picolaxPdf from "../../assets/Pdfs/NutritionalInstructions/hebrew/picolax.pdf";
import unknownPdf from "../../assets/Pdfs/NutritionalInstructions/hebrew/general_instructions.pdf";
import { postAnalytics } from "../../analytics";

const pdfs = {
  meroken: merokenPdf,
  moviprep: moviprepPdf,
  picolax: picolaxPdf,
  unknown: unknownPdf,
};

function NutritionalGuidelines() {
  const { Case } = useUser();
  const { concentrate } = Case;

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
  text-align: center;
  ${buttonCSS}
`;
