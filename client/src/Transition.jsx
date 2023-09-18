import { motion } from "framer-motion";
import PropTypes from "prop-types";
import styled from "styled-components";

export default function Transition({ children }) {
  return (
    <Fade
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.34, 1] }}
    >
      {children}
    </Fade>
  );
}

Transition.propTypes = {
  children: PropTypes.node,
};

const Fade = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: white;
  transform-origin: bottom;
`;
