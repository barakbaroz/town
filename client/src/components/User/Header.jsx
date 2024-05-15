import styled from "styled-components";
import gistLogo from "../../assets/Logos/gist_logo.svg";
import hospitalLogo from "../../assets/Logos/hospital_logo.png";

const Header = () => {
  return (
    <Container id="HeaderContainer">
      <Logo alt="Hospital Logo" src={hospitalLogo} />
      <Logo alt="Gist Logo" src={gistLogo} />
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

const Logo = styled.img`
  height: var(--header-logo-height);
  @media (min-width: 1024px) {
    height: 60px;
  }
`;
