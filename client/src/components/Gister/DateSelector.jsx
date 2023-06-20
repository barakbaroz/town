import { useRef } from "react";
import { Calendar } from "@gistmed/gist-ui/dist/components/DatePicker/Calendar";
import OperationsDates from "./OperationsDates";
import styled from "styled-components";
import { useDatePickerState } from "react-stately";
import { useDatePicker } from "react-aria";

function DateSelector(props) {
  let datePickerState = useDatePickerState({
    ...props,
    shouldCloseOnSelect: false,
  });
  let dateFieldRef = useRef();
  let { groupProps, fieldProps, calendarProps } = useDatePicker(
    props,
    datePickerState,
    dateFieldRef
  );
  return (
    <Wrapper>
      <Calendar {...calendarProps} />
      <OperationsDates
        groupProps={groupProps}
        dateFieldRef={dateFieldRef}
        fieldProps={fieldProps}
      />
    </Wrapper>
  );
}

export default DateSelector;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 15px;
  width: 54.313rem;
  height: 23.688rem;
  margin: 30px;
  padding-bottom: 10px;
`;
