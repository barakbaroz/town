import PropTypes from "prop-types";
import styled from "styled-components";
import background from "../assets/Backgrounds/login.jpg";
import gistLogo from "../assets/Logos/gist_logo_mask.svg";
import hospitalLogo from "../assets/Logos/hospital_logo_Login.svg";

export const Wrapper = ({ children, formRef, ...props }) => {
  return (
    <Container>
      <GistLogo />
      <HopitalLogo />
      <Form {...props} ref={formRef}>
        <div>
          <Title>Welcome</Title>
          <SubTitle>
            to the Endoscopy Patient’s <br /> Guidance System
          </SubTitle>
        </div>
        {children}
      </Form>
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
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Abraham";
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: fit-content;
  align-items: center;
  text-align: center;
  padding-block: 85px;
  padding-inline: 95px;
  border-radius: 70px;
  backdrop-filter: blur(30px);
  background-color: rgba(255, 255, 255, 0.25);
  transform: translateX(-60%);
  width: 600px;
  box-sizing: border-box;
`;

export const Part = styled.div`
  flex-direction: column;
  gap: 1.5rem;
  width: fit-content;
  align-items: center;
  display: ${({ show }) => (show ? "flex" : "none")};
`;

export const Submit = styled.button`
  border-radius: 3rem;
  border: none;
  background-color: #f02a4c;
  padding: 0.7rem;
  min-width: 170px;
  color: white;
  font-size: 1.188rem;
  cursor: pointer;
  font-family: inherit;
  transition: all 200ms linear;
  &:hover {
    box-shadow: 3px 3px 6px rgba(122, 122, 122, 0.5);
  }
  &:disabled {
    opacity: 0.3;
    cursor: progress;
  }
`;

export const Input = styled.input`
  background: none;
  border: none;
  outline: none;
  font-family: inherit;
  border-radius: 2rem;
  padding-block: 15px;
  padding-inline: 28px;
  background-color: #fff;
  width: 16rem;
  text-align: start;
  font-size: 1.125rem;
  line-height: 1.5rem;
`;

const Title = styled.h1`
  font-size: 3.125rem;
  margin: 0;
`;

const SubTitle = styled.p`
  font-size: 2.25rem;
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

export const Error = styled.span`
  color: #f02a4c;
`;
