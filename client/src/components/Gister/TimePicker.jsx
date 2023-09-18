import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { ReactComponent as MoonIcon } from "../../assets/Icons/moon.svg";
import { ReactComponent as SunIcon } from "../../assets/Icons/sun.svg";
import { useEffect, useState } from "react";

export default function TimePicker({ defaultValue, onChange, ...props }) {
  const [highlight, setHighlight] = useState(null);

  const hansleChange = (e) => {
    const { value } = e.target;
    if (!value) return setHighlight(null);
    const [hours] = value.split(":");
    setHighlight(hours >= 15 ? "moon" : "sun");
    if (onChange) onChange(value);
  };

  useEffect(() => {
    if (defaultValue) {
      const [hours] = defaultValue.split(":");
      setHighlight(hours >= 15 ? "moon" : "sun");
    }
  }, [defaultValue]);

  return (
    <Container {...props}>
      <Time onChange={hansleChange} defaultValue={defaultValue} />
      <Sun highlight={highlight} />
      <Moon highlight={highlight} />
    </Container>
  );
}

TimePicker.propTypes = {
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
};

TimePicker.defaultProps = {};

const highlightCSS = css`
  fill: #7a9dfd;
`;

const iconCSS = css`
  width: 1em;
  height: 1em;
  padding-inline: 0.563em;
  border-radius: 50%;
  fill: #b7b7b7;
`;

const Moon = styled(MoonIcon)`
  ${iconCSS}
  ${({ highlight }) => highlight === "moon" && highlightCSS}
`;

const Sun = styled(SunIcon)`
  ${iconCSS}
  ${({ highlight }) => highlight === "sun" && highlightCSS}
`;

const Time = styled.input.attrs({ type: "time" })`
  padding-inline: 0.563em;
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
