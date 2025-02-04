import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Translator } from "../Translation";
import SingleQuestion from "./SingleQuestion";
import PropTypes from "prop-types";
import { useRef } from "react";
import { useUser } from "../../providers/UserProvider";

const SatisfactionQuestions = ({ videoStarted }) => {
  // Ref to object that represent the question keys possible in order to check if everything answered.
  const answersRef = useRef({
    allay: false,
    "helped-understand": false,
    "recommend-others": false,
  });

  const [state, setState] = useState("none");
  const { Case } = useUser();
  if (Case.CasesProgress.satisfactionAnswer) return <></>;
  if (!videoStarted) return <></>;

  // Specific checking if the second questions pop all answered.
  const onSecondaryAnswer = (questionKey) => () => {
    // Update the current place in the ref object to indicate
    // wheter the question has been answered or not.
    answersRef.current[questionKey] = true;
    if (Object.values(answersRef.current).every(Boolean))
      // If every question in the object ref is true it means that every question in the ref
      // has been answered so we move on to the next stage.
      setState("allAnswered");
  };

  // First stage when someone clicked the video so the first questions is popping.
  if (state === "none")
    return (
      <SingleQuestion
        questionKey="video-helpful"
        onAnswer={() => setState("firstAnswered")}
        show={videoStarted}
      />
    );

  // Second stage when the first question is answered and the other 2 questions need to pop.
  if (state === "firstAnswered")
    return (
      <div>
        <ThanksTitle id="ThanksTitle">
          <Translator>Satisfaction-Response</Translator>
        </ThanksTitle>

        <ExtraQuestionsContainer>
          <SingleQuestion
            questionKey="allay"
            show={true}
            onAnswer={onSecondaryAnswer("allay")}
          />

          <SingleQuestion
            questionKey="helped-understand"
            show={true}
            onAnswer={onSecondaryAnswer("helped-understand")}
          />

          <SingleQuestion
            questionKey="recommend-others"
            show={true}
            onAnswer={onSecondaryAnswer("recommend-others")}
          />
        </ExtraQuestionsContainer>
      </div>
    );

  // First stage when all the answers have been answered so we put the thank you for the feedback resposne.
  if (state === "allAnswered")
    return (
      <ThanksTitle id="ThanksTitle">
        <Translator>Satisfaction-question-all-answered</Translator>
      </ThanksTitle>
    );

  // TODO: Get the response from backend and render the correct thing.
  // if (userInfo.UserActions.find((action) => action.type.includes(type)))
  //   return <div style={{ height: "1.5rem" }}></div>;
};

export default SatisfactionQuestions;

SatisfactionQuestions.propTypes = {
  videoStarted: PropTypes.bool,
};

const fadeIn = keyframes`
from { opacity: 0;}
to { opacity: 1;}
  `;

const ThanksTitle = styled.h3`
  text-align: start;
  font-weight: 500;
  animation: ${fadeIn} 3s;
  padding-inline: var(--screen-texts-padding);
  margin-block-start: 0px;
  margin-block-end: 1rem;
`;

const ExtraQuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.625rem;
`;
