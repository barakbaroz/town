import { useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function JumpingPopup({ children, open }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return;
    }
    document.body.style.overflow = "scroll";
  }, [open]);
  return (
    <ScreenWrapper open={open}>
      <Container open={open}>{children}</Container>
    </ScreenWrapper>
  );
}

export default JumpingPopup;

JumpingPopup.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool,
};

const ScreenWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  position: fixed;
  inset: 0;
  transition: backdrop-filter 600ms linear;
  backdrop-filter: brightness(${({ open }) => (open ? 0.5 : 1)});
  pointer-events: ${({ open }) => (open ? "auto" : "none")};
`;

const Container = styled.div`
  width: 100%;
  min-width: 80%;
  box-sizing: border-box;
  padding-inline: 2.875rem;
  padding-block: 68px;
  border-radius: 20px 20px 0 0;
  background-color: white;
  position: fixed;
  transition: transform 250ms linear;
  bottom: 0;
  transform: translateY(${({ open }) => (open ? 0 : "100%")});
`;
