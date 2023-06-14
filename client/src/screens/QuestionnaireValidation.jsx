import styled from "styled-components";
import questions from "../questionnairesStructure/StartQuestionnaire.json";
import QuestionValidation from "../components/Questionnaire/QuestionValidation";
import { useLocation } from "react-router-dom";
import { Fragment } from "react";

function QuestionnaireValidation() {
  const location = useLocation();
  const answers = location.state;

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    const notComplete = Object.keys(questions).find(
      (questionKey) => !(questionKey in data)
    );
    if (notComplete) return;
    // Send axios reuest.
  };

  return (
    <Container>
      {/* <Header /> */}
      <TextBox>סיימתם לענות על השאלון, בדקו את תשובותיכם לפני שליחה</TextBox>
      <CheckboxesContainer onSubmit={handleSubmit}>
        {Object.entries(questions).map(([questionKey, questionProperties]) => {
          return (
            <Fragment key={questionKey}>
              <QuestionValidation
                questionKey={questionKey}
                questionProperties={questionProperties}
                value={answers?.[questionKey]}
              />
              <Divider />
            </Fragment>
          );
        })}
        <Button>שליחה</Button>
      </CheckboxesContainer>
    </Container>
  );
}

export default QuestionnaireValidation;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e8eefd;
  padding-inline: 1rem;
  box-sizing: border-box;
`;

const TextBox = styled.div`
  font-weight: 500;
  font-size: 1.2rem;
  text-align: start;
  padding-block: 1.125rem;
  padding-inline: 24px;
  background-color: white;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 20px;
`;

const CheckboxesContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* gap: 0.5rem; */
  padding-block: 2rem;
  padding-inline: 15px;
  align-items: center;
`;

const Button = styled.button`
  margin-block-start: 1rem;
  font-size: 1.2rem;
  cursor: pointer;
  padding-block: 0.5rem;
  width: clamp(2rem, 50%, 13rem);
  border: none;
  padding-inline: 1rem;
  border-radius: 50px;
  background-color: #f02a4c;
  color: white;
`;

const Divider = styled.div`
  height: 1px;
  border-radius: 2px;
  background-color: #e5e5e5;
  margin-block: 1rem;
  &:last-of-type {
    display: none;
  }
`;
