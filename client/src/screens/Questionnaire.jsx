import styled from "styled-components";
import { Translator } from "../components/Translation";
import { useNavigate, useParams } from "react-router-dom";
import Navigation from "../components/Questionnaire/Navigation";
import questionnaireImages from "../assets/Questionnaire";
import { buttonCSS } from "../components/general.style";
import { questionnaireContext } from "../providers/QuestionnaireProvider";
import { useContext } from "react";
import Transition from "../Transition";
import white_v from "../assets/Icons/white_v.svg";

const questions = [
  "diabetesMedicines",
  "bloodPressureMedicines",
  "bloodThinners",
  "nutritionalSupplement",
  "colonoscopyBefore",
];

function Questionnaire() {
  const navigate = useNavigate();
  const { answers, updateAnswer, submit } = useContext(questionnaireContext);
  const { questionKey } = useParams();
  const questionIndex = questions.indexOf(questionKey);
  const questionsLength = questions.length;
  const nextQuestionKey = questions[questionIndex + 1];
  const handleAnswer = (answerKey) => () => {
    updateAnswer({ questionKey, answerKey });
    if (nextQuestionKey) return navigate(`../${nextQuestionKey}`);
    else submit();
  };

  return (
    <Transition>
      <QuestionContainer>
        <QuestionImage src={questionnaireImages[questionKey]} />
        <Navigation index={questionIndex} questionsSize={questionsLength} />
        <QuestionText>
          <Translator>Question-{questionKey}</Translator>
        </QuestionText>
        <ButtonsContainer key={questionKey}>
          <Answer onClick={handleAnswer("Yes")}>
            <Input
              name={questionKey}
              value="Yes"
              defaultChecked={answers.current[questionKey] === "Yes"}
            />
            <Vcheck />
            <AnswerText>
              <Translator>Yes</Translator>
            </AnswerText>
          </Answer>
          <Answer onClick={handleAnswer("No")}>
            <Input
              name={questionKey}
              value="No"
              defaultChecked={answers.current[questionKey] === "No"}
            />
            <Vcheck />
            <AnswerText>
              <Translator>No</Translator>
            </AnswerText>
          </Answer>
        </ButtonsContainer>
      </QuestionContainer>
    </Transition>
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
  gap: 1.75rem;
`;

const QuestionImage = styled.img`
  max-width: 100%;
`;

const Input = styled.input.attrs({
  type: "radio",
  hidden: true,
})``;

const Vcheck = styled.img.attrs({
  src: white_v,
  alt: "V",
})`
  display: none;
  height: 1.5rem;
  width: 1.2rem;
`;

const AnswerText = styled.span`
  line-height: 1.5rem;
`;

const Answer = styled.label`
  ${buttonCSS}
  display: flex;
  justify-content: center;
  padding-block: 0.5rem;
  width: 6.7rem;
  max-width: 45%;
  &:has(${Input}:checked) {
    span {
      display: none;
    }
    ${Vcheck} {
      display: block;
    }
  }
`;
