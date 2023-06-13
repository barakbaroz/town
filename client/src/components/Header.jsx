import styled from "styled-components";
import gistLogo from "../assets/Logos/gistLogo.svg";
import Ichilov_Logo_PatientScreen from "../assets/Logos/Ichilov_Logo_PatientScreen.svg";

const Header = () => {
  return (
    <Container id="HeaderContainer">
      <Logo id="IchilovImg" src={Ichilov_Logo_PatientScreen} />
      <Logo id="GistLogo" src={gistLogo} />
    </Container>
  );
};
export default Header;

const Container = styled.div`
  --header-logo-height: 1.6875rem;
  --header-block-padding: 16px;
  --header-inline-padding: 16px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: var(--header-block-padding);
  padding-inline: var(--header-inline-padding);

  padding-inline: var(--screen-padding-inline);
`;
const Logo = styled.img`
  height: var(--header-logo-height);
  max-width: 50%;
`;
