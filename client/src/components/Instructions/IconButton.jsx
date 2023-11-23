import styled from "styled-components";
import { Translator } from "../Translation";
import PropTypes from "prop-types";

function IconButton({ children, ...props }) {
  return (
    <Container {...props}>
      <Label>
        <Translator>share</Translator>
      </Label>
      {children}
    </Container>
  );
}

export default IconButton;

IconButton.propTypes = {
  ContainerRef: PropTypes.object,
  label: PropTypes.string,
  children: PropTypes.node,
};

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.4rem;
`;

const Label = styled.p`
  color: #f02a4c;
  font-size: 0.875rem;
  margin: 0rem;
`;
