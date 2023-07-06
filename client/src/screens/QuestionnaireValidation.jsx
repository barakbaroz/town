import styled from "styled-components";
import questions from "../questionnairesStructure/StartQuestionnaire.json";
import QuestionValidation from "../components/Questionnaire/QuestionValidation";
import wave_background from "../assets/Backgrounds/wave_background.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { Fragment, useState } from "react";
import { Translator } from "../components/Translation";
import JumpingPopup from "../components/JumpingPopup";
import MissingAnswers from "../components/Popups/MissingAnswers";
import axios from "axios";
import { useContext } from "react";
import { userContext } from "../providers/UserProvider";

function QuestionnaireValidation() {
  const [open, setOpen] = useState(false);
  const { id: userId } = useContext(userContext);
  const navigate = useNavigate();

  const location = useLocation();
  const answers = location.state;

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    const notComplete = Object.keys(questions).find(
      (questionKey) => !(questionKey in data)
    );
    if (notComplete) return setOpen(true);
    // Send axios reuest
    axios
      .post("/api/users/updateQuestionnaire", { UserId: userId, data })
      .then(() => navigate("../Video"))
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <TextBox>
        <Translator>questionnaireValidationTitle</Translator>
      </TextBox>
      <CheckboxesContainer onSubmit={handleSubmit}>
        {Object.entries(questions).map(([questionKey, questionProperties]) => (
          <Fragment key={questionKey}>
            <Divider />
            <QuestionValidation
              questionKey={questionKey}
              questionProperties={questionProperties}
              value={answers?.[questionKey]}
            />
          </Fragment>
        ))}
        <Button>
          <Translator>send</Translator>
        </Button>
      </CheckboxesContainer>
      <JumpingPopup open={open} setOpen={setOpen}>
        <MissingAnswers setOpen={setOpen} open={open} />
      </JumpingPopup>
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
  background-image: url(${wave_background});
  background-repeat: no-repeat;
  background-size: cover;
  /* background-image: linear-gradient(
    transparent 0%,
    #e1e9fe 30%,
    #e1e9fe 50%,
    transparent 100%
  ); */
  padding: 1.375rem;
  box-sizing: border-box;
`;

const TextBox = styled.div`
  font-weight: 500;
  font-size: 1.25rem;
  text-align: start;
  background-color: white;
  border-radius: 20px;
`;

const CheckboxesContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-block: 2rem;
  padding-inline: 22px;
  align-items: center;
  max-width: 45rem;
`;

const Button = styled.button`
  font-family: inherit;
  margin-block-start: 3.5rem;
  margin-block-end: 1.5rem;
  font-size: 1.25rem;
  cursor: pointer;
  padding-block: 0.75rem;
  min-width: 52%;
  border: none;
  padding-inline: 0.75rem;
  border-radius: 50px;
  background-color: #f02a4c;
  color: white;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  border-radius: 2px;
  background-color: #e5e5e5;
  margin-block: 1rem;
`;
