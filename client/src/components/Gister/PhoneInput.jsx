import styled from "styled-components";
import { useState } from "react";
import PropTypes from "prop-types";
import { GeneralInput } from "./Giser.styled";

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

const Input = styled(GeneralInput)`
  padding-inline: 1.688rem;
  width: 12.5rem;
  direction: ltr;
`;

const Utility = styled.div`
  .invalid {
    border-color: var(--invalid);
  }
`;
