import styled from "styled-components";
import { Translator } from "../components/Translation";
import { useNavigate, useParams } from "react-router-dom";
import Navigation from "../components/Questionnaire/Navigation";
import questionnaireImages from "../assets/Questionnaire";
import { Button } from "../components/general.style";

const questions = [
  "diabetesMedicines",
  "heartMedicines",
  "bloodThinners",
  "nutritionalSupplement",
  "colonoscopyBefore",
];

function Questionnaire() {
  const navigate = useNavigate();
  const { questionKey } = useParams();
  const questionIndex = questions.indexOf(questionKey);
  const questionsLength = questions.length;
  const nextQuestionKey = questions[questionIndex + 1];

  const handleAnswer = () => {
    if (nextQuestionKey) return navigate(`../Questionnaire/${nextQuestionKey}`);
  };

  return (
    <QuestionContainer>
      <QuestionImage src={questionnaireImages[questionKey]} />
      <Navigation
        index={questionIndex}
        questionsSize={questionsLength}
        nextQuestionKey={nextQuestionKey}
      />
      <QuestionText>
        <Translator>{questionKey}</Translator>
      </QuestionText>
      <ButtonsContainer>
        <Answer onClick={handleAnswer}>כן</Answer>
        <Answer onClick={handleAnswer}>לא</Answer>
      </ButtonsContainer>
    </QuestionContainer>
  );
}

export default Questionnaire;

const QuestionContainer = styled.div`
  min-height: calc(100vh- var(--header-size));
  min-height: calc(100dvh - var(--header-size));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding-inline: 37px;
  padding-block-start: 30px;
  padding-block-end: 60px;
  box-sizing: border-box;
`;

const QuestionText = styled.p`
  font-size: 1.375rem;
  margin: 0;
`;

const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const QuestionImage = styled.img`
  max-width: 100%;
`;

const Answer = styled(Button)`
  padding-block: 0.5rem;
  width: 8.5rem;
  max-width: 45%;
`;
