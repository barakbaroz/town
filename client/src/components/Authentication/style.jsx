import styled from "styled-components";

export const Stage = styled.form`
  flex-direction: column;
  gap: 2rem;
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
  width: 22.813rem;
  text-align: start;
  font-size: 1.125rem;
  line-height: 1.5rem;
  box-sizing: border-box;
`;

export const Instructions = styled.p`
  font-size: 1.125rem;
  font-weight: 500;
`;

export const Error = styled.span`
  color: #f02a4c;
`;

export const Massage = styled.p`
  font-size: 1.75rem;
  font-weight: 500;
`;
