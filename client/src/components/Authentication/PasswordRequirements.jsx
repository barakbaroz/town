import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { ReactComponent as Mark } from "../../assets/Icons/mark.svg";

export default function PasswordRequirements({ children, password }) {
  return (
    <Container>
      {children}
      <Pop>
        <Inner>
          <Circle chenkd={password.length >= 8}>
            <StyledMark />
          </Circle>
          <span>Password must contain at least 8 digits:</span>
          <Circle
            chenkd={
              Object.values(conditions).filter(({ regex }) =>
                regex.test(password)
              ).length >= 3
            }
          >
            <StyledMark />
          </Circle>
          <span>Password must contain 3 of the following:</span>
          <span />
          <div>
            {Object.entries(conditions).map(([key, { text, regex }]) => (
              <ConditionText key={key} chenkd={regex.test(password)}>
                {text}
              </ConditionText>
            ))}
          </div>
        </Inner>
      </Pop>
    </Container>
  );
}

PasswordRequirements.propTypes = {
  children: PropTypes.node,
  password: PropTypes.string,
};

const conditions = {
  UpperCase: { text: "Upper case letters", regex: /[A-Z]/ },
  LowerCase: { text: "Lower case letters", regex: /[a-z]/ },
  SpecialCharacters: {
    text: "Special characters",
    regex: /[^A-Za-z0-9]/,
  },
  Digits: { text: "Numeric digits", regex: /[0-9]/ },
};

const StyledMark = styled(Mark)`
  height: 7px;
  margin-left: 1px;
  display: none;
`;

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 17px;
  min-width: 17px;
  height: 17px;
  min-height: 17px;
  border: 1px solid;
  border-radius: 50%;
  margin-inline: 9px;
  box-sizing: border-box;
  ${({ chenkd }) =>
    chenkd &&
    css`
      border-color: #1fc95a;
      background-color: #1fc95a;
      ${StyledMark} {
        display: block;
      }
    `}
`;

const ConditionText = styled.span`
  font-size: 1rem;
  white-space: nowrap;
  &:not(:last-child) {
    &::after {
      content: " / ";
      color: var(--text-color);
      font-weight: 400;
      white-space: break-spaces;
    }
  }
  ${({ chenkd }) =>
    chenkd &&
    css`
      color: #1fc95a;
      font-weight: 500;
    `}
`;

const Inner = styled.div`
  padding: 16px;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-columns: auto auto;
  justify-items: start;
  align-items: center;
  text-align: start;
  row-gap: 5px;
`;

const Pop = styled.div`
  transition: all 400ms linear;
  max-height: 0;
  overflow: hidden;
  box-sizing: border-box;
`;

const Container = styled.div`
  background-color: #ffffffb3;
  border-radius: 29px;
  width: 22.813rem;
  &:has(input:focus) {
    ${Pop} {
      max-height: 12.5rem;
    }
  }
`;
