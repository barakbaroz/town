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

  const getParagrah = () =>
    "Consult-Doctor-" +
    Questionnaires.filter(inRelevantQuestionsKey)
      .sort()
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
      <Button>
        <Translator>טופס לרופא/ת משפחה</Translator>
      </Button>
    </Card>
  );
}

export default ConsultDoctor;

const Text = styled.p`
  margin: 0;
  margin-block-end: 1.125rem;
  font-size: 1.188rem;
`;
