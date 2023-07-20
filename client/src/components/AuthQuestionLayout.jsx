import styled from "styled-components";
import { Translator } from "./Translation";
import PropTypes from "prop-types";

function AuthQuestionLayout({ children, index }) {
  return (
    <>
      <ProgressContainer>
        <Translator>{index}/3</Translator>
      </ProgressContainer>

      <QuestionContainer>{children}</QuestionContainer>
    </>
  );
}

AuthQuestionLayout.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number,
  onNext: PropTypes.func,
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
