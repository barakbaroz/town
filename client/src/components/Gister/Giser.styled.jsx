import styled from "styled-components";

export const FieldTitle = styled.h3`
  padding: 0.825rem 0;
  font-size: 1.25rem;
  font-weight: 400;
  padding: 0;
  margin-block-start: 0;
  margin-block-end: 0.938rem;
`;

export const GeneralInput = styled.input`
  border: 1px solid transparent;
  transition: all 250ms ease-in;
  background-color: #f5f6f8;
  border-radius: 10px;
  caret-color: #81a0f6;
  outline: none;
  font-size: var(--field-font-size);
  font-family: var(--field-font-family);
  line-height: var(--field-line-height);
  padding-block: var(--field-padding-block);
`;
