import styled from "styled-components";
import PrivacyText from "./PrivacyText";
import background from "../../assets/Backgrounds/legalBackground.svg";

function Privacy() {
  return (
    <Container>
      <Inner>
        <TextContainer>
          <PrivacyText />
        </TextContainer>
      </Inner>
    </Container>
  );
}

export default Privacy;

const Container = styled.div`
  height: 100vh;
  color: black;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  overflow-y: auto;
  padding: 2.4rem;
  box-sizing: border-box;
`;

const Inner = styled.div`
  margin-bottom: 2rem;
  width: 100%;
`;

const TextContainer = styled.div`
  text-align: right;
  width: 100%;
`;
