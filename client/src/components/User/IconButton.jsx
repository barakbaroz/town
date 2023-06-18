import React from "react";
import styled from "styled-components";
import { Translator } from "../Translation";

function IconButton({ label, children, ...props }) {
  return (
    <Container {...props}>
      <Label>
        <Translator>{label}</Translator>
      </Label>
      {children}
    </Container>
  );
}

export default IconButton;

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
