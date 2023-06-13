import Header from "../components/Header";
import styled from "styled-components";
import questions from "../questionnairesStructure/StartQuestionnaire.json";
import QuestionValidation from "../components/QuestionValidation";

function QuestionnaireValidation() {
  return (
    <Container>
      <Header />
      {Object.entries(questions).map(
        ([questionKey, questionProperties], questionIndex) => {
          return (
            <QuestionValidation
              questionKey={questionKey}
              questionProperties={questionProperties}
              questionIndex={questionIndex}
            />
          );
        }
      )}
    </Container>
  );
}

export default QuestionnaireValidation;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #e8eefd;

  padding-inline: 1rem;
  box-sizing: border-box;
`;
