import styled from "styled-components";
import { useState } from "react";
import PropTypes from "prop-types";
import { GeneralInput } from "./Giser.styled";

export default function GisterInput({
  inputRef,
  onChange,
  validate,
  nextfocus,
  ...props
}) {
  const [value, setValue] = useState("");

  const handleNumberChange = (e) => {
    const { value } = e.target;
    if (validate && !validate.test(value)) return;
    setValue(value);
    onChange(value);
    if (value.length >= props.maxLength && nextfocus) nextfocus.current.focus();
  };

  return (
    <Input
      value={value}
      ref={inputRef}
      onChange={handleNumberChange}
      {...props}
    />
  );
}

GisterInput.propTypes = {
  inputRef: PropTypes.object,
  onChange: PropTypes.func,
  validate: PropTypes.instanceOf(RegExp),
  maxLength: PropTypes.number,
  nextfocus: PropTypes.shape({
    current: PropTypes.object,
  }),
};

const Input = styled(GeneralInput)`
  padding-inline: 1.688rem;
  width: 12.5rem;
`;
