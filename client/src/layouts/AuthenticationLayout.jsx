import { Outlet } from "react-router-dom";
import { LanguageProvider, Translator } from "../components/Translation";
import Header from "../components/User/Header";
import LanguageBar from "../components/User/LanguageBar";
import styled from "styled-components";

function AuthenticationLayout() {
  return (
    <LanguageProvider>
      <Container>
        <Header />
        <LanguageBar />
        <Title>
          <Translator>אנא ענה/י על 3 שאלות לצורך זיהוי</Translator>
        </Title>

        <Outlet />
      </Container>
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
