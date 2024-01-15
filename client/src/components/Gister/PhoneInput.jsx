import styled from "styled-components";
import { useState } from "react";
import PropTypes from "prop-types";
import { GeneralInput } from "./Giser.styled";

const NumberRgx = /(^[0-9]+$|^$)/;

export default function PhoneInput({ phoneInputRef, onChange }) {
  const [number, setNumber] = useState("");

  const handleNumberChange = (e) => {
    const { value } = e.target;
    if (!NumberRgx.test(value)) return;
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
        maxLength={10}
      />
    </Utility>
  );
}

PhoneInput.propTypes = {
  phoneInputRef: PropTypes.object,
  onChange: PropTypes.func,
};

const Input = styled(GeneralInput)`
  padding-inline: 1.688rem;
  width: 12.5rem;
`;

const Utility = styled.div`
  .invalid {
    border-color: var(--invalid);
  }
`;
