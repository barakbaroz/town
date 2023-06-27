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
      <Input
        type="tel"
        id="phoneNumber"
        name="phoneNumber"
        value={number}
        ref={phoneInputRef}
        onChange={handleNumberChange}
      />
    </Utility>
  );
}

PhoneInput.propTypes = {
  phoneInputRef: PropTypes.object,
  onChange: PropTypes.func,
};

export default PhoneInput;

const Input = styled.input`
  border: 1px solid transparent;
  transition: all 250ms ease-in;
  background-color: #f5f6f8;
  border-radius: 10px;
  caret-color: #81a0f6;
  font-size: 1.5rem;
  padding-block: 16px;
  padding-inline: 27px;
  line-height: 33px;
  width: 12.5rem;
  outline: none;
  font-family: "Poppins";
  direction: ltr;
`;

const Utility = styled.div`
  .invalid {
    border: var(--invalid);
  }
`;
