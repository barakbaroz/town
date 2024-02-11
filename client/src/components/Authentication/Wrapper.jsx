import PropTypes from "prop-types";
import styled from "styled-components";
import background from "../../assets/Backgrounds/login.jpg";
import gistLogo from "../../assets/Logos/gist_logo_login.svg";
import hospitalLogo from "../../assets/Logos/hospital_logo_login.svg";

export const Wrapper = ({ children, ...props }) => {
  return (
    <Container>
      <GistLogo />
      <HopitalLogo />
      <Box {...props}>
        <div>
          <Title>Welcome</Title>
          <SubTitle>
            to the Endoscopy Patient’s <br /> Guidance System
          </SubTitle>
        </div>
        {children}
      </Box>
    </Container>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node,
  formRef: PropTypes.object,
  onSubmit: PropTypes.func,
};

const Container = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Abraham";
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: fit-content;
  align-items: center;
  text-align: center;
  padding-inline: 30px;
  padding-block: 70px;
  border-radius: 70px;
  backdrop-filter: blur(30px);
  background-color: rgba(255, 255, 255, 0.25);
  transform: translateX(-60%);
  width: 500px;
`;

const Title = styled.h1`
  font-size: 3.125rem;
  margin: 0;
`;

const SubTitle = styled.p`
  font-size: 2rem;
  margin-top: 0.5rem;
`;

const GistLogo = styled.img.attrs({ src: gistLogo })`
  position: absolute;
  top: 40px;
  right: 40px;
`;

const HopitalLogo = styled.img.attrs({ src: hospitalLogo })`
  position: absolute;
  height: 61px;
  top: 40px;
  left: 40px;
`;
