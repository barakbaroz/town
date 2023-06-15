import styled from "styled-components";
import NotFoundLogo from "../assets/Logos/404Logo.svg";
const NotFound = () => {
  return (
    <Container>
      <img src={NotFoundLogo} alt="not-found" />
      <Title>404</Title>
      <SubTitle>Page not found</SubTitle>
      <Text>
        The page you were looking for doesn't exist.
        <br /> You may have mistyped the address or the page may have moved.
      </Text>
    </Container>
  );
};
export default NotFound;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  direction: ltr;
  font-family: "Poppins";
  flex-direction: column;
  padding: 40px;
  box-sizing: border-box;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 48px;
  line-height: 72px;
  margin-top: 20px;
`;
const SubTitle = styled.div`
  font-size: 24px;
  line-height: 35px;
`;
const Text = styled.div`
  font-size: 18px;
  line-height: 27px;
  font-weight: 400;
  margin-top: 50px;
`;
