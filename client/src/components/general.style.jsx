import styled, { css } from "styled-components";

export const buttonCSS = css`
  --content-height: 1.625rem;
  font-size: 1.125rem;
  cursor: pointer;
  color: #ffffff;
  background-color: #f02a4c;
  border: none;
  padding-block: 0.688rem;
  padding-inline: 27px;
  border-radius: 50px;
  align-self: center;
  font-family: inherit;
  text-decoration: none;
`;

export const Button = styled.button`
  ${buttonCSS}
`;
