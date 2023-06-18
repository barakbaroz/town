import styled from "styled-components";
import gistLogo from "../../assets/Logos/gistLogo.svg";
import Ichilov_Logo_PatientScreen from "../../assets/Logos/Ichilov_Logo_PatientScreen.svg";

const Header = () => {
  return (
    <Container id="HeaderContainer">
      <Ichilov id="IchilovImg" src={Ichilov_Logo_PatientScreen} />
      <GistLogo id="GistLogo" src={gistLogo} />
    </Container>
  );
};
export default Header;

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: var(--header-block-padding);
  padding-inline: var(--header-inline-padding);
`;

const GistLogo = styled.img`
  height: var(--header-logo-height);
`;

const Ichilov = styled.img`
  height: var(--header-logo-height);
`;
