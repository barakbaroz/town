import styled from "styled-components";
import PropTypes from "prop-types";
import { DatePicker } from "@gistmed/gist-ui";
import TimePicker from "./TimePicker";

export default function Scheduler({ casesDataRef }) {
  const handleDateSelect = (date) => {
    casesDataRef.date = date.toDate();
  };

  const handleTimeSelect = (time) => {
    console.log(time);
  };

  return (
    <Container>
      <Wrapper>
        <DatePicker
          label="date"
          defaultValue={null}
          onChange={handleDateSelect}
        />
      </Wrapper>
      <Wrapper>
        <TimePicker onChange={handleTimeSelect} />
      </Wrapper>
    </Container>
  );
}

Scheduler.propTypes = {
  casesDataRef: PropTypes.object,
};

const Wrapper = styled.div`
  background-color: #f2f3f7;
  border-radius: 100vh;
  width: fit-content;
  padding-inline: 30px;
  padding-block: 10px;
  width: 90%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  font-size: 1rem;
  font-family: "Poppins";
`;
