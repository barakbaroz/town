import { useState, Fragment, useContext } from "react";
import styled from "styled-components";
import background from "../assets/Backgrounds/wave_background.svg";
import data from "../components/CharacterSelection/CharacterSelectionData.json";
import { useNavigate, useParams } from "react-router-dom";
import avatarsImg from "../assets/Avatars";
import { Translator } from "../components/Translation";
import postAnalytics from "../utilities/postAnalytics";
import { userContext } from "../providers/UserProvider";

function CharacterSelection() {
  const navigate = useNavigate();
  const userInfo = useContext(userContext);
  const { userId } = useParams();
  const [answers, setAnswers] = useState({});
  const [avatar, setAvatar] = useState("");
  const [tag, setTag] = useState({});
  const [showError, setShowError] = useState(false);

  const answerQuestion = (questionKey, answerKey) => () => {
    postAnalytics({ userId, type: `answer-${questionKey}-${answerKey}` });
    setAvatar("");
    setAnswers((prev) => ({
      ...prev,
      [questionKey]: answerKey,
    }));
  };

  const handleAvatar = (key, tags) => () => {
    postAnalytics({ userId, type: `avatar-${key}` });
    const missinsAnswers = !Object.keys(data).every((key) => key in answers);
    setShowError(missinsAnswers);
    if (missinsAnswers) return;
    setAvatar(key);
    setTag(tags);
  };

  const filtersAvatars = Object.values(answers).reduce(
    (prev, answer) => prev.filter(({ fields }) => fields.includes(answer)),
    avatars
  );

  const handelNext = () => {
    if (!avatar) return setShowError(true);
    postAnalytics({ userId, type: "general-information-answered" });
    userInfo.updateCase(tag);
    navigate("../Video");
  };

  return (
    <CharacterSelectionContainer id="CharacterSelectionContainer">
      <Title id="PickYourCharecter">
        <Translator>Character-Selection-Title</Translator>
      </Title>
      <PickerContainer id="PickerContainer">
        {Object.entries(data).map(([questionKey, questionData]) => (
          <Fragment key={questionKey}>
            <QuestionWrapper id="QuestionWrapper">
              <Question id="Question">
                <Translator>{questionData.title}</Translator>
              </Question>
              <QuestionPickerContainer id="QuestionPickerContainer">
                {Object.entries(questionData.answers).map(
                  ([answerKey, answerText]) => (
                    <Fragment key={answerKey}>
                      <QuestionPicker
                        id="QuestionPicker"
                        selected={answerKey === answers[questionKey]}
                        onClick={answerQuestion(questionKey, answerKey)}
                      >
                        <Translator>{answerText}</Translator>
                      </QuestionPicker>
                      <Divider id="Divider" />
                    </Fragment>
                  )
                )}
              </QuestionPickerContainer>
            </QuestionWrapper>
            <Line />
          </Fragment>
        ))}
        <CharacterQuestion id="CharacterQuestion">
          <Question id="Question">
            <Translator>
              Character-Selection-Avatar-
              {filtersAvatars === 1 ? "Single" : "Multiple"}
            </Translator>
          </Question>
          <CharacterQuestionPickerContainer id="CharacterQuestionPickerContainer">
            {filtersAvatars.map(({ key, tags }) => (
              <Avatar
                id="Avatar"
                key={key}
                selected={key === avatar}
                onClick={handleAvatar(key, tags)}
                src={avatarsImg[key]}
              />
            ))}
          </CharacterQuestionPickerContainer>
          <ErrorContainer id="ErrorContainer">
            <Error id="Error" show={showError}>
              <Translator>Character-Selection-Error</Translator>
            </Error>
          </ErrorContainer>
        </CharacterQuestion>
      </PickerContainer>
      <ConfirmationButton id="Button" onClick={handelNext} avatar={avatar}>
        <Translator>Next</Translator>
      </ConfirmationButton>
    </CharacterSelectionContainer>
  );
}

export default CharacterSelection;

const avatars = [
  {
    key: "male_50-70_white",
    fields: ["male", "20-50", "50-70", "other"],
    tags: { gender: "male", age: "50-70", ethnicity: "white" },
  },
  {
    key: "male_50-70_black",
    fields: ["male", "20-50", "50-70", "other"],
    tags: { gender: "male", age: "50-70", ethnicity: "black" },
  },

  {
    key: "male_70+_white",
    fields: ["male", "70+", "other"],
    tags: { gender: "male", age: "70+", ethnicity: "white" },
  },
  {
    key: "male_70+_black",
    fields: ["male", "70+", "other"],
    tags: { gender: "male", age: "70+", ethnicity: "black" },
  },

  {
    key: "female_50-70_white",
    fields: ["female", "20-50", "50-70", "other"],
    tags: { gender: "female", age: "50-70", ethnicity: "white" },
  },
  {
    key: "female_50-70_black",
    fields: ["female", "20-50", "50-70", "other"],
    tags: { gender: "female", age: "50-70", ethnicity: "black" },
  },

  {
    key: "female_70+_white",
    fields: ["female", "70+", "other"],
    tags: { gender: "female", age: "70+", ethnicity: "white" },
  },
  {
    key: "female_70+_black",
    fields: ["female", "70+", "other"],
    tags: { gender: "female", age: "70+", ethnicity: "black" },
  },
];

const CharacterSelectionContainer = styled.div`
  height: calc(100dvh - var(--header-size));
  width: 100vw;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  padding-inline: 17px;
  box-sizing: border-box;
  --inner-padding-inline: 18px;
`;

const Title = styled.p`
  text-align: start;
  font-size: 1.5rem;
  font-weight: 500;
  padding-inline: var(--inner-padding-inline);
  padding-block: 1.438em;
  margin: 0;
`;

const PickerContainer = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  padding: var(--inner-padding-inline);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  box-shadow: 0px 3px 10px 0px #0000000d;
`;

const Question = styled.p`
  font-size: 1.1875rem;
  text-align: start;
  margin: 0rem;
`;

const QuestionPicker = styled.div`
  color: ${({ selected }) => (selected ? "#84A4FC" : "#A7A7A7")};
  font-size: 1.1875rem;
`;

const QuestionPickerContainer = styled.div`
  display: flex;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  cursor: pointer;
`;

const CharacterQuestionPickerContainer = styled(QuestionPickerContainer)`
  width: calc(100% + (var(--inner-padding-inline) * 2));
  margin-inline-start: calc(var(--inner-padding-inline) * -1);
  cursor: pointer;
`;

const Divider = styled.div`
  margin: 0 1rem;
  width: 1px;
  background-color: #d1dcfc;
  border-radius: 10px;
  :last-child {
    display: none;
  }
`;

const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Line = styled.div`
  height: 1px;
  width: 100%;
  background: #eaeaea;
`;

const ConfirmationButton = styled.button`
  text-decoration: none;
  padding: 0.5rem 3rem;
  background-color: #f02a4c;
  border-radius: 200px;
  border: none;
  color: #ffffff;
  font-size: 1.063rem;
  font-family: inherit;
  opacity: 0.6;
  opacity: ${({ avatar }) => avatar && 1};
  margin-top: 2.125rem;
  display: block;
  margin-inline: auto;
`;

const Avatar = styled.img`
  margin: 0.5rem;
  border-radius: 50%;
  border: 2px solid ${({ selected }) => (selected ? "#84a4fc" : "transparent")};
  width: 4.688rem;
  height: 4.688rem;
`;

const CharacterQuestion = styled.div`
  width: 100%;
  display: inline-block;
`;

const ErrorContainer = styled.div`
  display: flex;
`;

const Error = styled.p`
  color: #f02a4c;
  font-size: 0.875rem;
  margin: 0rem;
  display: ${({ show }) => (show ? "block" : "none")};
  ::before {
    content: "*";
  }
`;
