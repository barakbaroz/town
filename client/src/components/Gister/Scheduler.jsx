import { DatePicker } from "@gistmed/gist-ui";
import styled from "styled-components";
import TimePicker from "./TimePicker";

export default function Scheduler() {
  return (
    <Container>
      <Wrapper>
        <DatePicker defaultValue={null} />
      </Wrapper>
      <TimePicker />
    </Container>
  );
}

const Wrapper = styled.div`
  background-color: #f2f3f7;
  border-radius: 100vh;
  width: fit-content;
  padding-inline: 30px;
  padding-block: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  font-size: 1.375rem;
`;
