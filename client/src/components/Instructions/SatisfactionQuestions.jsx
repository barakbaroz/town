import { useContext, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Translator } from "../Translation";
import { userContext } from "../../providers/UserProvider";
import SingleQuestion from "./SingleQuestion";
import PropTypes from "prop-types";
import { useRef } from "react";

const SatisfactionQuestions = ({ videoStarted }) => {
  const userInfo = useContext(userContext);
  const answersRef = useRef({
    "reduce-worries": false,
    "recommend-other-parents": false,
  });

  const [state, setState] = useState("none");

  const onSecondaryAnswer = (questionKey) => () => {
    answersRef.current[questionKey] = true;
    if (Object.values(answersRef.current).every(Boolean))
      setState("allAnswered");
  };

  if (state === "none")
    return (
      <SingleQuestion
        questionKey="video-helpful"
        onAnswer={() => setState("firstAnswered")}
        show={videoStarted}
      />
    );

  if (state === "firstAnswered")
    return (
      <>
        <ThanksTitle id="ThanksTitle">
          <Translator>Satisfaction-Response</Translator>
        </ThanksTitle>

        <ExtraQuestionsContainer>
          <SingleQuestion
            questionKey="reduce-worries"
            show={state === "firstAnswered"}
            onAnswer={onSecondaryAnswer("reduce-worries")}
          />
          <SingleQuestion
            questionKey="recommend-other-parents"
            show={state === "firstAnswered"}
            onAnswer={onSecondaryAnswer("recommend-other-parents")}
          />
        </ExtraQuestionsContainer>
      </>
    );

  if (state === "allAnswered")
    return (
      <ThanksTitle id="ThanksTitle">
        <Translator>Satisfaction-question-all-answered</Translator>
      </ThanksTitle>
    );

  //TODO: Get the response from backend and render the correct thing.
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
  font-weight: 400;
  animation: ${fadeIn} 3s;
  padding-inline: var(--screen-texts-padding);
`;

const ExtraQuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
