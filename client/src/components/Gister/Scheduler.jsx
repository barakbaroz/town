import styled from "styled-components";
import PropTypes from "prop-types";
import { DatePicker } from "@gistmed/gist-ui";
import TimePicker from "./TimePicker";

export default function Scheduler({ casesDataRef }) {
  const handleDateSelect = (date) => {
    casesDataRef.current.date = date.toDate();
    document.getElementById("date").classList.remove("invalid");
  };

  const handleTimeSelect = (time) => {
    casesDataRef.current.time = time;
    document.getElementById("time").classList.remove("invalid");
  };

  return (
    <Container>
      <Wrapper id="date">
        <DatePicker
          label="date"
          defaultValue={null}
          onChange={handleDateSelect}
          locale="en-US"
        />
      </Wrapper>
      <Wrapper id="time">
        <TimePicker fromCaseItem={false} onChange={handleTimeSelect} />
      </Wrapper>
    </Container>
  );
}

Scheduler.propTypes = {
  casesDataRef: PropTypes.object,
};

const Wrapper = styled.div`
  background-color: #f2f3f7;
  border-radius: 200px;
  border: 1px solid transparent;
  padding-inline: 30px;
  padding-block: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  font-size: 1rem;
  font-family: "Poppins";
  .invalid {
    border-color: var(--invalid);
  }
`;
