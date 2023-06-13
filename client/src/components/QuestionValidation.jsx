import styled from "styled-components";

function QuestionValidation({
  questionKey,
  questionProperties,
  questionIndex,
}) {
  return (
    <Container>
      <Text>{questionKey}</Text>
      <AnswersButtons>
        {questionProperties.options.map((answer) => {
          return <Answer key={`${questionKey}-${answer}`} />;
        })}
      </AnswersButtons>
    </Container>
  );
}

export default QuestionValidation;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 1.2rem;
`;

const Text = styled.div`
  font-size: 1.2rem;
`;

const AnswersButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

const Answer = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
  border: 1px solid black;
`;
