import { createContext, useRef } from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import axios from "axios";

export const questionnaireContext = createContext();

const QuestionnaireProvider = () => {
  const answers = useRef({});

  const updateAnswer = ({ questionKey, answerKey }) => {
    answers.current[questionKey] = answerKey;
  };

  const submit = () => {
    //Axios request to update the questionnaire table with the corresponding answer.
    axios.post("/api/user/updateQuestionnaire", { answers: answers.current });
  };
  return (
    <questionnaireContext.Provider value={{ updateAnswer, submit }}>
      <Outlet />
    </questionnaireContext.Provider>
  );
};

QuestionnaireProvider.propTypes = {
  children: PropTypes.node,
};

export default QuestionnaireProvider;
