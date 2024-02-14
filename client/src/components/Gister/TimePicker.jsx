import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { ReactComponent as MoonIcon } from "../../assets/Icons/moon.svg";
import { ReactComponent as SunIcon } from "../../assets/Icons/sun.svg";
import { useEffect, useState } from "react";
import { TimeField, DateInput, DateSegment } from "react-aria-components";
import { Time } from "@internationalized/date";

export default function TimePicker({ defaultValue, onChange, ...props }) {
  const [highlight, setHighlight] = useState(null);

  const hansleChange = (time) => {
    if (!time) {
      setHighlight(null);
      if (onChange) onChange(null);
      return;
    }
    const { hour } = time;
    setHighlight(hour >= 15 ? "moon" : "sun");
    if (onChange) onChange(`${time}`);
  };

  useEffect(() => {
    if (defaultValue) {
      const [hours] = defaultValue.split(":");
      setHighlight(hours >= 15 ? "moon" : "sun");
    }
  }, [defaultValue]);

  return (
    <Container {...props}>
      <MyTimeField
        onChange={hansleChange}
        defaultValue={defaultValue && new Time(...defaultValue.split(":"))}
      />
      <Sun highlight={highlight} />
      <Moon highlight={highlight} />
    </Container>
  );
}

function MyTimeField(props) {
  return (
    <TimeField aria-label="date" {...props}>
      <StyledDateInput>
        {(segment) => <DateSegment segment={segment} />}
      </StyledDateInput>
    </TimeField>
  );
}

TimePicker.propTypes = {
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
};

const StyledDateInput = styled(DateInput)`
  display: grid;
  grid-template-columns: auto auto auto 5px auto;
  & > div {
    display: grid;
  }
`;

const highlightCSS = css`
  fill: #7a9dfd;
`;

const iconCSS = css`
  width: 1em;
  height: 1em;
  padding-inline: 9px;
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

const Container = styled.div`
  direction: ltr;
  display: flex;
  flex-wrap: nowrap;
  width: fit-content;
  align-items: center;
`;
