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

export const desktopCss = css`
  max-width: 700px;
  margin-inline: auto;
  min-height: calc(min(800px, 100vh)- var(--header-size));
  min-height: calc(min(800px, 100dvh) - var(--header-size));
`;
