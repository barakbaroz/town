import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { Translator } from "../Translation";
import { userContext } from "../../providers/UserProvider";
import postAnalytics from "../../utilities/postAnalytics";

const Feedback = ({ show }) => {
  const { userId } = useParams();
  const userInfo = useContext(userContext);

  const [answered, setAnswered] = useState(false);

  if (answered)
    return (
      <ThanksTitle id="ThanksTitle">
        <Translator>Satisfaction-Response</Translator>
      </ThanksTitle>
    );

  const handleFeedback = (answer) => (e) => {
    postAnalytics({ userId, type: answer });
    setAnswered(true);
  };

  //TODO: Get the response from backend and render the correct thing.

  // if (userInfo.UserActions.find((action) => action.type.includes(type)))
  //   return <div style={{ height: "1.5rem" }}></div>;

  return (
    <FeedBackWrapper show={show} id="FeedBackWrapper" answered={answered}>
      <FeedbackTitle id="FeedbackTitle">
        <Translator>Satisfaction-Question</Translator>
      </FeedbackTitle>
      <Answers id="Answers">
        <Answer id="Answer" onClick={handleFeedback("positive-feedbacks")}>
          <Translator>Satisfaction-Answer-Yes</Translator>
        </Answer>
        <Answer id="Answer" onClick={handleFeedback("negative-feedbacks")}>
          <Translator>Satisfaction-Answer-No</Translator>
        </Answer>
      </Answers>
    </FeedBackWrapper>
  );
};

export default Feedback;

const fadeIn = keyframes`
from { opacity: 0;}
to { opacity: 1;}
  `;

const FeedBackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  /* margin-block: 1.5rem; */
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
`;

const ThanksTitle = styled.h3`
  text-align: start;
  font-weight: 400;
  animation: ${fadeIn} 3s;
`;
