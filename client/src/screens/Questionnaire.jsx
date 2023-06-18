import styled from "styled-components";
import ProgressBar from "../components/ProgressBar";
import Navigation from "../components/Navigation";
import Carouselle from "../components/Carousell";
import questions from "../questionnairesStructure/StartQuestionnaire.json";
import questionsAnimations from "../assets/questionsAnimations";
import { useContext, useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Translator } from "../components/Translation";
import qustionnaireImages from "../assets/questionsImages";
import { userContext } from "../providers/UserProvider";

function Questionnaire() {
  const { Case } = useContext(userContext);
  const navigate = useNavigate();
  const formRef = useRef(null);
  const [index, setIndex] = useState(0);
  const questionsLength = Object.keys(questions).length;
  const [answeresIndexes, setAnsweresIndexes] = useState(
    Array(questionsLength).fill(false)
  );
  const { age, gender, race } = Case;
  const avatar = `${gender}_${age}_${race}`;

  const handleAnswer = (questionKey, answerKey, index) => () => {
    //axios request to update the answer.
    setIndex(Math.min(index + 1, questionsLength - 1));
    setAnsweresIndexes((prev) => {
      const copy = [...prev];
      copy[index] = true;
      return copy;
    });
    if (index + 1 === questionsLength) submit();
  };

  const submit = () => {
    const formdata = new FormData(formRef.current);
    const data = Object.fromEntries(formdata.entries());
    navigate("../QuestionnaireValidation", { state: data });
  };

  return (
    <Container ref={formRef}>
      <ImageWrapperWrapper>
        <ImageWrapper index={index + 1}>
          <ProgressBar answeresIndexes={answeresIndexes} />
          <QuestionImage
            src={qustionnaireImages[avatar][index]}
            alt={`${avatar} ${index}`}
          />
        </ImageWrapper>
      </ImageWrapperWrapper>

      <Navigation
        textIndicator={`${index + 1}/${questionsLength}`}
        setIndex={setIndex}
        maxQuestionIndex={9}
      />
      <Carouselle index={index} setIndex={setIndex}>
        {Object.entries(questions).map(
          ([questionKey, questionProperties], questionIndex) => {
            return (
              <QuestionContainer key={questionKey}>
                <QuestionText>
                  <Translator>{questionKey}</Translator>
                </QuestionText>
                <ButtonsContainer>
                  {questionProperties.options.map((answerKey) => (
                    <Label
                      key={`${questionKey}-${answerKey}`}
                      onClick={handleAnswer(
                        questionKey,
                        answerKey,
                        questionIndex
                      )}
                    >
                      {/* <CostumeCheckbox answerKey={answer}>
                        <Vcheck />
                      </CostumeCheckbox> */}
                      <Translator>{answerKey}</Translator>
                      <Input name={questionKey} value={answerKey} />
                    </Label>
                  ))}
                </ButtonsContainer>
              </QuestionContainer>
            );
          }
        )}
      </Carouselle>
    </Container>
  );
}

export default Questionnaire;

const Container = styled.form`
  --screen-padding-inline: 32px;
  /* padding-block: 1rem; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
  width: 100%;
  min-height: 100%;
  /* padding-inline-end: 1rem; */
  * {
    box-sizing: border-box;
  }
  direction: rtl;
`;

const ImageWrapper = styled.div`
  background: url(${({ index }) => questionsAnimations[index]});
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageWrapperWrapper = styled.div`
  background-image: linear-gradient(
    transparent 0%,
    #e1e9fe 30%,
    #e1e9fe 87%,
    transparent 91%,
    transparent 100%
  );
  width: 100%;
`;

const QuestionImage = styled.img`
  width: 100%;
  max-width: 40rem;
`;

const QuestionContainer = styled.div`
  text-align: center;
  padding-inline: var(--screen-padding-inline);
`;

const QuestionText = styled.div`
  font-size: 1.25rem;
  margin-bottom: 2rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Input = styled.input.attrs({
  type: "radio",
})`
  display: none;
`;

const Label = styled.label`
  font-size: 1.2rem;
  cursor: pointer;
  padding-block: 0.5rem;
  width: clamp(2rem, 50%, 13rem);
  border: none;
  padding-inline: 1rem;
  border-radius: 50px;
  background-color: #f02a4c;
  color: white;
  &:has(${Input}:checked) {
    background-color: blue;
  }
`;
