import { createContext, useRef, useState } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { LanguageProvider, Translator } from "../components/Translation";
import Header from "../components/User/Header";
import LanguageBar from "../components/User/LanguageBar";
import styled from "styled-components";
import axios from "axios";
import Loader from "../components/Authentication/Loader";

export const AuthenticationContext = createContext({});

function AuthenticationLayout() {
  const [statusState, setStatusState] = useState("idle");
  const { userId } = useParams();
  const [buttonEnabled, setButtonEnable] = useState(false);
  const { state } = useLocation();
  const answersRef = useRef(state || {});
  const navigate = useNavigate();

  const reset = () => {
    setButtonEnable(false);
    answersRef.current = {};
  };

  const updateAnswers = ({ questionName, answer, nextRoute }) => {
    answersRef.current[questionName] = answer;
    if (nextRoute) navigate(nextRoute, { state: answersRef.current });
    setButtonEnable(
      ["zehutNumber", "yearOfBirth", "department"].every(
        (questionKey) => questionKey in answersRef.current
      )
    );
  };

  const handleAuthentication = () => {
    //Sendind axios request to the endpoint on Server to check authentication.
    //Post request with the object on the value as body.
    setStatusState("loading");
    axios
      .post("/api/users/verify", { userId, ...answersRef.current })
      .then(() => setStatusState("success"))
      .catch(() => setStatusState("failed"));
  };

  if (statusState !== "idle")
    return (
      <LanguageProvider>
        <Loader
          state={statusState}
          setStatusState={setStatusState}
          reset={reset}
        />
      </LanguageProvider>
    );

  return (
    <LanguageProvider>
      <AuthenticationContext.Provider value={{ updateAnswers }}>
        <Container>
          <Header />
          <LanguageBar />
          <Title>
            <Translator>אנא ענה/י על 3 שאלות לצורך זיהוי</Translator>
          </Title>

          <Outlet />

          <SubmitButton
            disabled={!buttonEnabled}
            onClick={handleAuthentication}
          >
            <Translator>שלח</Translator>
          </SubmitButton>
        </Container>
      </AuthenticationContext.Provider>
    </LanguageProvider>
  );
}

export default AuthenticationLayout;

const Container = styled.div`
  --field-line-height: 2rem;
  --field-padding-block: 0.813rem;
  --field-font-size: 1.5rem;
  --field-font-family: "Poppins";

  --question-padding: 58px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  min-height: 100dvh;
  width: 100vw;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.375rem;
  font-weight: 600;
  margin-block-start: 3rem;
  margin-block-end: 1.6875rem;
  margin-inline: var(--question-padding);
`;

const SubmitButton = styled.button`
  color: white;
  margin-top: auto;
  text-decoration: none;
  padding-inline: 4.875rem;
  padding-block: 0.7rem;
  margin-block-end: 40px;
  margin-inline: var(--question-padding);
  border-radius: 3rem;
  border: none;
  background-color: #f02a4c;
  font-size: 1rem;
  cursor: pointer;
  font-family: inherit;
  transition: all 200ms linear;
  &:disabled {
    opacity: 0.3;
  }
`;
