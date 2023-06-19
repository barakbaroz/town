import styled from "styled-components";
import gistLogo from "../assets/Logos/gistLogo.svg";
import Ichilov_Logo_PatientScreen from "../assets/Logos/Ichilov_Logo_PatientScreen.svg";
import PropTypes from "prop-types";

function CoordinatorHeader({ text }) {
  return (
    <Container id="coordinator-header">
      <Ichilov src={Ichilov_Logo_PatientScreen} />
      <Text>{text}</Text>
      <GistLogo src={gistLogo} />
    </Container>
  );
}

CoordinatorHeader.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
};

const Container = styled.div`
  box-shadow: 0 0 10px 0px grey;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;
const GistLogo = styled.img`
  width: 5%;
`;

const Ichilov = styled.img`
  width: 8%;
`;
const Text = styled.div`
  font-size: 1.5rem;
  color: #84a4fc;
`;
export default CoordinatorHeader;
