import styled from "styled-components";
import LegalText from "./LegalText";
import background from "../../assets/Backgrounds/legalBackground.svg";
import { Link } from "react-router-dom";
// import axios from "axios";

const Legal = () => {
  // const { userId } = useParams();

  const BackClick = (e) => {
    // axios.post("/api/users/userAction", { userId, type: `TOS-Back` });
  };

  return (
    <Container>
      <Inner>
        <TextContainer>
          <LegalText />
          <ButtonContainer>
            <Button to={-1} onClick={BackClick}>
              חזור
            </Button>
          </ButtonContainer>
        </TextContainer>
      </Inner>
    </Container>
  );
};

export default Legal;

const Container = styled.div`
  height: 100vh;
  height: 100dvh;
  width: 100vw;
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
  overflow-y: auto;
  width: 100%;
`;

const Button = styled(Link)`
  background-color: #f02a4c;
  border-radius: 99999px;
  border: none;
  color: #ffffff;
  padding: 0.3rem 3rem;
  font-size: 1.063rem;
  font-family: inherit;
`;

const TextContainer = styled.div`
  text-align: right;
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
