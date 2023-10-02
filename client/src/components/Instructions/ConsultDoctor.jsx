import styled from "styled-components";
import { Card, Icon, Title, TopSection } from "./Card.Style";
import { Translator } from "../Translation";
import doctorConsult from "../../assets/Icons/doctor_consult.svg";
import { buttonCSS } from "../general.style";
import { useUser } from "../../providers/UserProvider";
import bloodThinnersDiabetesMedicinesPDF from "../../assets/Pdfs/ConsultDoctor/bloodThinners-diabetesMedicines.pdf";
import bloodThinnersPDF from "../../assets/Pdfs/ConsultDoctor/bloodThinners.pdf";
import diabetesMedicinesPDF from "../../assets/Pdfs/ConsultDoctor/diabetesMedicines.pdf";

const pdfs = {
  "bloodThinners:Yes-diabetesMedicines:Yes": bloodThinnersDiabetesMedicinesPDF,
  "bloodThinners:Yes-diabetesMedicines:No": bloodThinnersPDF,
  "bloodThinners:No-diabetesMedicines:Yes": diabetesMedicinesPDF,
};

const questionsKeys = ["bloodThinners", "diabetesMedicines"];

const inRelevantQuestionsKey = ({ questionKey }) =>
  questionsKeys.includes(questionKey);

function ConsultDoctor() {
  const { Questionnaires } = useUser();

  const key = Questionnaires.filter(inRelevantQuestionsKey)
    .sort((a, b) => a.questionKey.localeCompare(b.questionKey))
    .map(({ questionKey, answerKey }) => `${questionKey}:${answerKey}`)
    .join("-");

  return (
    <Card>
      <TopSection>
        <Title>
          <Translator>התייעצות עם הרופא/ה המטפל/ת</Translator>
        </Title>
        <Icon src={doctorConsult} alt="doctorConsult" />
      </TopSection>

      <Text>
        <Translator>Consult-Doctor-{key}</Translator>
      </Text>
      <StyledButton href={pdfs[key]} show={pdfs[key]}>
        <Translator>טופס לרופא/ת משפחה</Translator>
      </StyledButton>
    </Card>
  );
}

export default ConsultDoctor;

const StyledButton = styled.a`
  ${buttonCSS}
  text-decoration: none;
  display: ${({ show }) => (show ? "block" : "none")};
`;

const Text = styled.p`
  margin: 0;
  margin-block-end: 2.188rem;
  font-size: 1.188rem;
`;
