import styled from "styled-components";
import { useState } from "react";
import PropTypes from "prop-types";

const regex = new RegExp("^[0-9]*$");

function PhoneInput({ phoneInputRef, onChange }) {
  const [number, setNumber] = useState("");

  const handleNumberChange = (e) => {
    const { value } = e.target;
    if (value && !regex.test(value)) return;
    setNumber(value);
    onChange(value);
  };

  return (
    <Utility>
      <Container>
        <Input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={number}
          ref={phoneInputRef}
          onChange={handleNumberChange}
        />
      </Container>
    </Utility>
  );
}

PhoneInput.propTypes = {
  phoneInputRef: PropTypes.object,
  onChange: PropTypes.func,
};

export default PhoneInput;

const Container = styled.div`
  display: flex;
  gap: 1rem;
  direction: ltr;
`;

const Input = styled.input`
  border: 1px solid transparent;
  transition: all 250ms ease-in;
  background-color: #f5f6f8;
  height: 1rem;
  font-size: 1.3rem;
  padding: 1rem;
  border-radius: 5px;
  width: 12rem;
  outline: none;
  caret-color: #81a0f6;
  font-family: inherit;
`;

const Utility = styled.div`
  .invalid {
    border: var(--invalid);
  }
`;
