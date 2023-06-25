import styled, { css } from "styled-components";
import { Translator } from "../Translation";
import postAnalytics from "../../utilities/postAnalytics";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";

function SingleQuestion({ questionKey, onAnswer, show }) {
  const [answer, setAnswer] = useState("");
  const { userId } = useParams();

  const handleFeedback = (answer) => () => {
    postAnalytics({
      userId,
      type: `satisfaction-question-${questionKey}-${answer}`,
    });
    setAnswer(answer);
    if (onAnswer) onAnswer();
  };

  return (
    <FeedBackWrapper id="FeedBackWrapper" show={show}>
      <FeedbackTitle id="FeedbackTitle">
        <Translator>Satisfaction-question-{questionKey}</Translator>
      </FeedbackTitle>
      <Answers id="Answers">
        <Answer
          id="AnswerYes"
          onClick={handleFeedback("yes")}
          checked={answer === "yes"}
        >
          <Translator>Satisfaction-Answer-Yes</Translator>
        </Answer>
        <Answer
          id="AnswerNo"
          onClick={handleFeedback("no")}
          checked={answer === "no"}
        >
          <Translator>Satisfaction-Answer-No</Translator>
        </Answer>
      </Answers>
    </FeedBackWrapper>
  );
}

export default SingleQuestion;

SingleQuestion.propTypes = {
  questionKey: PropTypes.string.isRequired,
  onAnswer: PropTypes.func,
  show: PropTypes.bool,
};

const FeedBackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  opacity: ${({ show }) => (show ? 1 : 0)};
  height: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 200ms linear;
  padding-inline: var(--screen-texts-padding);
`;

const FeedbackTitle = styled.div`
  text-align: start;
  font-size: 1.125rem;
`;

const Answers = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;
const Answer = styled.button`
  border: 1.5px solid #84a4fc;
  border-radius: 20px;
  color: #84a4fc;
  background-color: transparent;
  font-family: inherit;
  font-size: 1.125rem;
  font-weight: 400;
  padding: 0.2rem 2.125rem;
  ${({ checked }) =>
    checked &&
    css`
      color: #fff;
      background-color: #84a4fc;
    `}
`;
