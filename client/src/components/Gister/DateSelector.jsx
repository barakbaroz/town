import { useRef, useState } from "react";
import { Calendar } from "@gistmed/gist-ui/dist/components/DatePicker/Calendar";
import OperationsDates from "./OperationsDates";
import styled from "styled-components";
import { useDatePickerState } from "react-stately";
import { useDatePicker } from "react-aria";
import PropTypes from "prop-types";

function DateSelector(props) {
  const [operationType, setOperationType] = useState("preSurgery");

  const dateFieldRef = useRef();
  const datePickerStatePreSurgery = useDatePickerState({
    ...props,
    onChange: (data) => props.onChange(operationType, data),
    shouldCloseOnSelect: false,
  });
  const preSurgeryProps = useDatePicker(
    props,
    datePickerStatePreSurgery,
    dateFieldRef
  );

  const datePickerStateSurgery = useDatePickerState({
    ...props,
    onChange: (data) => props.onChange(operationType, data),
    shouldCloseOnSelect: false,
  });
  const surgeryProps = useDatePicker(
    props,
    datePickerStateSurgery,
    dateFieldRef
  );

  const calendarPropsMaper = {
    preSurgery: preSurgeryProps,
    surgery: surgeryProps,
  };

  return (
    <Wrapper id="DateSelector">
      <CalendarWrapper>
        <Calendar {...calendarPropsMaper[operationType].calendarProps} />
      </CalendarWrapper>
      <OperationsDates
        operationType={operationType}
        setOperationType={setOperationType}
        dateFieldRef={dateFieldRef}
        preSurgeryProps={preSurgeryProps}
        surgeryProps={surgeryProps}
      />
    </Wrapper>
  );
}

export default DateSelector;

DateSelector.propTypes = {
  onChange: PropTypes.func,
};

const Wrapper = styled.div`
  --padding-block: 38px;
  --padding-inline: 45px;
  display: flex;
  border-radius: 15px;
  box-shadow: 0px 15px 10px #0000001a;
  overflow: hidden;
  font-family: "Assistant";
`;

const CalendarWrapper = styled.div`
  padding-block: var(--padding-block);
  padding-inline: var(--padding-inline);
`;
