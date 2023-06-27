import styled from "styled-components";
import PropTypes from "prop-types";
import { DateField } from "@gistmed/gist-ui";

const OperationsDates = ({
  operationType,
  setOperationType,
  dateFieldRef,
  preSurgeryProps,
  surgeryProps,
}) => {
  return (
    <Wrapper>
      <SwitchWrapper>
        {["preSurgery", "surgery"].map((type) => (
          <SwitchText
            onClick={() => setOperationType(type)}
            key={type}
            selected={operationType === type}
          >
            {Text[type]}
          </SwitchText>
        ))}
      </SwitchWrapper>
      <div>
        <Name>{Text.preSurgery}</Name>
        <InputGroup {...preSurgeryProps.groupProps} ref={dateFieldRef}>
          <DateField {...preSurgeryProps.fieldProps} />
        </InputGroup>
      </div>
      <div>
        <Name> {Text.surgery}</Name>
        <InputGroup {...surgeryProps.groupProps} ref={dateFieldRef}>
          <DateField {...surgeryProps.fieldProps} />
        </InputGroup>
      </div>
    </Wrapper>
  );
};

const Text = {
  preSurgery: "טרום ניתוח",
  surgery: "ניתוח",
};

const DatePickerProp = {
  groupProps: PropTypes.object,
  fieldProps: PropTypes.object,
  calendarProps: PropTypes.object,
};

OperationsDates.propTypes = {
  operationType: PropTypes.string,
  setOperationType: PropTypes.func,

  dateFieldRef: PropTypes.object,
  preSurgeryProps: PropTypes.shape(DatePickerProp),
  surgeryProps: PropTypes.shape(DatePickerProp),
};

export default OperationsDates;

const Wrapper = styled.div`
  background-color: #84a4fc;
  padding-block: var(--padding-block);
  padding-inline: var(--padding-inline);
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const SwitchWrapper = styled.div`
  background-color: #9bb5fd;
  padding: 4px;
  display: flex;
  border-radius: 20rem;
`;

const SwitchText = styled.div`
  color: ${({ selected }) => (selected ? "#84A4FC" : "#fff")};
  background-color: ${({ selected }) => (selected ? "#fff" : "transparent")};
  border-radius: 20rem;
  font-size: 1.125rem;
  line-height: 23px;
  padding-block: 9px;
  padding-inline: 20px;
  min-width: 80px;
  text-align: center;
`;

const InputGroup = styled.div`
  width: auto;
  display: inline-flex;
  position: relative;
  cursor: pointer;
  color: #fff;
`;

const Name = styled.div`
  color: #fff;
  font-size: 1.438rem;
`;
