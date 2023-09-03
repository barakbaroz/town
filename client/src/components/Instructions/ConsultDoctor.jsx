import styled from "styled-components";
import { Card, Icon, Title, TopSection } from "./Card.Style";
import { Translator } from "../Translation";
import doctor_consult from "../../assets/Icons/doctor_consult.svg";
import { Button } from "../general.style";
import { useContext } from "react";
import { userContext } from "../../providers/UserProvider";

const inRelevantQuestionsKey = ({ questionKey }) =>
  ["diabetesMedicines", "bloodThinners"].includes(questionKey);

function ConsultDoctor() {
  const { Questionnaires } = useContext(userContext);

  const showPDF = Questionnaires.some(
    (questionObj) =>
      inRelevantQuestionsKey(questionObj) && questionObj.answerKey === "Yes"
  );

  const getParagrah = () =>
    "Consult-Doctor-" +
    Questionnaires.filter(inRelevantQuestionsKey)
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
        <Translator>{getParagrah()}</Translator>
      </Text>
      <StyledButton show={showPDF}>
        <Translator>טופס לרופא/ת משפחה</Translator>
      </StyledButton>
    </Card>
  );
}

export default ConsultDoctor;

const StyledButton = styled(Button)`
  display: ${({ show }) => (show ? "block" : "none")};
`;

const Text = styled.p`
  margin: 0;
  margin-block-end: 1.125rem;
  font-size: 1.188rem;
`;
