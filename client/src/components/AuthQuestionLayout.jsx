import styled from "styled-components";
import { Translator } from "./Translation";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function AuthQuestionLayout({ children, index, nextRoute }) {
  return (
    <>
      <ProgressContainer>
        <Translator>{index}/3</Translator>
      </ProgressContainer>

      <QuestionContainer>{children}</QuestionContainer>

      <SubmitButton to={`../${nextRoute}`}>
        <Translator>שלח</Translator>
      </SubmitButton>
    </>
  );
}

AuthQuestionLayout.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number,
  nextRoute: PropTypes.string,
};

export default AuthQuestionLayout;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-inline: var(--question-padding);
`;

const ProgressContainer = styled.div`
  font-size: 1.5625rem;
  color: #7a9dfd;
  margin-block-end: 3rem;
  margin-inline: var(--question-padding);
`;

const SubmitButton = styled(Link)`
  text-decoration: none;
  margin-top: auto;
  margin-block-end: 40px;
  margin-inline: var(--question-padding);
  border-radius: 3rem;
  border: none;
  background-color: #f02a4c;
  padding: 0.7rem;
  width: 60%;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  font-family: inherit;
  transition: all 200ms linear;
  &:disabled {
    opacity: 0.3;
  }
`;
