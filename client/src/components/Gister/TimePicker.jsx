import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { ReactComponent as MoonIcon } from "../../assets/Icons/moon.svg";
import { ReactComponent as SunIcon } from "../../assets/Icons/sun.svg";
import { useEffect, useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimeField } from "@mui/x-date-pickers/TimeField";
import dayjs from "dayjs";

export default function TimePicker({
  defaultValue,
  onChange,
  fromCaseItem,
  ...props
}) {
  const [highlight, setHighlight] = useState(null);

  const handleChange = (e) => {
    const hours = e.hour();
    const minutes = e.minute();
    if (!hours && !minutes) return setHighlight(null);
    setHighlight(hours >= 15 ? "moon" : "sun");
    const time = `${hours}:${minutes}`;
    if (onChange) onChange(time);
  };

  useEffect(() => {
    if (defaultValue) {
      const hours = defaultValue.split("T")[1].split(":")[0];
      setHighlight(hours >= 15 ? "moon" : "sun");
    }
  }, [defaultValue]);

  return (
    <Container {...props}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Time
          fromCaseItem={fromCaseItem}
          onChange={handleChange}
          format="HH:mm"
          placeholder="00:00"
          value={defaultValue ? dayjs(defaultValue) : null}
        />
      </LocalizationProvider>
      <Sun highlight={highlight} />
      <Moon highlight={highlight} />
    </Container>
  );
}

TimePicker.propTypes = {
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
  fromCaseItem: PropTypes.bool,
};

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

const Time = styled(TimeField).attrs({ type: "text" })`
  padding-inline: 0.563em;
  font-size: 1em;
  font-family: inherit;
  outline: none;
  background-color: transparent;
  /* override the specific css attributes */
  .MuiOutlinedInput-notchedOutline {
    border: none !important;
  }
  && .MuiOutlinedInput-input {
    padding: 0;
    text-align: ${({ fromCaseItem }) => (fromCaseItem ? "end" : "center")};
    width: 8.125em;
  }
`;

const Container = styled.div`
  direction: ltr;
  display: flex;
  flex-wrap: nowrap;
  width: fit-content;
  align-items: center;
`;
