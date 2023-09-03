import styled from "styled-components";
import { Card, Icon, Title, TopSection } from "./Card.Style";
import { Translator } from "../Translation";
import doctor_consult from "../../assets/Icons/doctor_consult.svg";
import { Button, buttonCSS } from "../general.style";
import { useContext } from "react";
import { userContext } from "../../providers/UserProvider";
import bloodThinnersDiabetesMedicinesPDF from "../../assets/Pdfs/ConsultDoctor/bloodThinners-diabetesMedicines.pdf";
import bloodThinnersPDF from "../../assets/Pdfs/ConsultDoctor/bloodThinners.pdf";
import diabetesMedicinesPDF from "../../assets/Pdfs/ConsultDoctor/diabetesMedicines.pdf";
import { Link } from "react-router-dom";

const pdfs = {
  "bloodThinners:Yes-diabetesMedicines:Yes": bloodThinnersDiabetesMedicinesPDF,
  "bloodThinners:Yes-diabetesMedicines:No": bloodThinnersPDF,
  "bloodThinners:No-diabetesMedicines:Yes": diabetesMedicinesPDF,
};

const inRelevantQuestionsKey = ({ questionKey }) =>
  ["diabetesMedicines", "bloodThinners"].includes(questionKey);

function ConsultDoctor() {
  const { Questionnaires } = useContext(userContext);

  const key = Questionnaires.filter(inRelevantQuestionsKey)
    .sort((a, b) => (a.questioKey < b.questioKey ? 1 : -1))
    .map(({ questionKey, answerKey }) => `${questionKey}:${answerKey}`)
    .join("-");

  return (
    <Card>
      <TopSection>
        <Title>
          <Translator>התייעצות עם הרופא/ה המטפל/ת</Translator>
        </Title>
        <Icon src={doctor_consult} alt="doctorConsult" />
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
  margin-block-end: 1.125rem;
  font-size: 1.188rem;
`;
