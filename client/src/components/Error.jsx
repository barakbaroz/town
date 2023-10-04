import NotFoundLogo from "../assets/Logos/404Logo.svg";
import styled from "styled-components";

export default function Error() {
  return (
    <Page>
      <Container>
        <img src={NotFoundLogo} alt="not-found" />
        <DescriptionContainer>
          <Title>Opps…</Title>
          <StatusDescription>something went wrong</StatusDescription>
        </DescriptionContainer>
        <ErrorText>Please try again latter</ErrorText>
      </Container>
    </Page>
  );
}

const Page = styled.div`
  width: 100%;
  height: 100vh;
  font-family: "Abraham";
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DescriptionContainer = styled.div`
  margin-block-start: 1.5rem;
  margin-block-end: 2.875rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.625rem;
  font-weight: 500;
  margin: 0;
`;
const StatusDescription = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
`;
const ErrorText = styled.div`
  font-size: 1.25rem;
`;
