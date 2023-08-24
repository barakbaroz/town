import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { ReactComponent as MoonIcon } from "../../assets/Icons/moon.svg";
import { ReactComponent as SunIcon } from "../../assets/Icons/sun.svg";
import { useState } from "react";

export default function TimePicker({ defaultValue, onChange, ...props }) {
  const [highlightIcon, setHighlightIcon] = useState(null);

  const hansleChange = (e) => {
    const { value } = e.target;
    if (!value) return setHighlightIcon(null);
    const [hours] = value.split(":");
    setHighlightIcon(hours >= 15 ? "moon" : "sun");
    if (onChange) onChange(value);
  };

  return (
    <Container {...props}>
      <Time onChange={hansleChange} defaultValue={defaultValue} />
      <Sun highlight={highlightIcon === "sun"} />
      <Moon highlight={highlightIcon === "moon"} />
    </Container>
  );
}

TimePicker.propTypes = {
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
};

TimePicker.defaultProps = {};

const iconCSS = css`
  width: 1em;
  height: 1em;
  padding-inline: 0.563em;
  border-radius: 50%;
  fill: #b7b7b7;
  ${({ highlight }) =>
    highlight &&
    css`
      fill: #7a9dfd;
    `}
`;

const Moon = styled(MoonIcon)`
  ${iconCSS}
`;

const Sun = styled(SunIcon)`
  ${iconCSS}
`;

const Time = styled.input.attrs({ type: "time" })`
  font-size: 1em;
  font-family: inherit;
  border: none;
  outline: none;
  background-color: transparent;
  &::-webkit-calendar-picker-indicator {
    display: none;
  }
`;

const Container = styled.div`
  direction: ltr;
  display: flex;
  flex-wrap: nowrap;
  width: fit-content;
  align-items: center;
`;
