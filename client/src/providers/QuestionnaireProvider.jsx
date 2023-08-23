import { createContext, useRef } from "react";
import PropTypes from "prop-types";
import { Outlet, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "./UserProvider";

export const questionnaireContext = createContext();

const QuestionnaireProvider = () => {
  const { updateQuestionaireAnswers } = useContext(userContext);
  const answers = useRef({});
  const navigate = useNavigate();

  const updateAnswer = ({ questionKey, answerKey }) => {
    answers.current[questionKey] = answerKey;
  };

  const submit = () => {
    updateQuestionaireAnswers(answers.current);
    navigate("../Video");
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
