import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { DateField } from "@gistmed/gist-ui";

const dateTypes = {
  OPERATION: "operation",
  TROM: "trom",
};

const OperationsDates = ({ groupProps, fieldProps, dateFieldRef }) => {
  const [operationType, setOperationType] = useState(dateTypes.TROM);

  return (
    <TimeOfDayWrapper>
      <SwitchWrapper>
        <Switch selected={operationType} />
        <Flex
          onClick={() =>
            setOperationType(
              operationType === dateTypes.OPERATION
                ? dateTypes.TROM
                : dateTypes.OPERATION
            )
          }
        >
          <SwitchText selected={operationType === dateTypes.TROM}>
            trom
          </SwitchText>
          <SwitchText selected={operationType === dateTypes.OPERATION}>
            operation
          </SwitchText>
        </Flex>
      </SwitchWrapper>
      <Content>
        <div>trom</div>
        <FullDate>
          <InputGroup {...groupProps} ref={dateFieldRef}>
            <DateField {...fieldProps} />
          </InputGroup>
        </FullDate>
        <div>operation</div>
        <FullDate>
          <InputGroup {...groupProps} ref={dateFieldRef}>
            <DateField {...fieldProps} />
          </InputGroup>
        </FullDate>
      </Content>
    </TimeOfDayWrapper>
  );
};

OperationsDates.propTypes = {
  groupProps: PropTypes.object,
  fieldProps: PropTypes.object,
  dateFieldRef: PropTypes.object,
};

export default OperationsDates;
const TimeOfDayWrapper = styled.div`
  padding-block-start: 30px;
  padding-block-end: 35px;
  padding-inline: 20px;
  text-align: right;
  width: 35%;
  background: #fc8484 0% 0% no-repeat padding-box;
  color: white;
`;
const SwitchWrapper = styled.div`
  border-radius: 25px;
  background-color: rgba(255, 255, 255, 0.19);
  height: 47px;
  width: 235px;
  margin: auto;
  padding: 2px 0;
  position: relative;
`;
const Flex = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 998;
  position: absolute;

  cursor: pointer;
`;
const SwitchText = styled.div`
  color: ${({ selected }) => (selected ? "#84A4FC" : "white")};
  font-size: 18px;
  font-weight: 600;
  line-height: 45px;
  width: 50%;
  text-align: center;
`;
const Switch = styled.div`
  background: white;
  border-radius: 21px;
  height: 41px;
  width: 50%;
  top: 5px;
  cursor: pointer;
  position: absolute;
  transition: 0.5s;
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  z-index: 1;
  left: ${({ selected }) => (selected === dateTypes.TROM ? "112px" : "5px")};
`;
const Content = styled.div`
  margin-block-start: 30px;
  margin-inline: auto;
  width: 235px;
  font-size: 23px;
  font-weight: 600;
  line-height: 30px;
`;
const FullDate = styled.div`
  padding-bottom: 20px;
  font-size: 18px !important;
  font-weight: 400;
`;
const InputGroup = styled.div`
  width: auto;
  display: inline-flex;
  position: relative;
  cursor: pointer;
`;
