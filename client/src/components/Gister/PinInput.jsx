import { useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const regex = new RegExp("[0-9]");

function PinInput({ ZehutInputRef, nextInput, onChange }) {
  const refs = useRef([]);

  const handleChange = (index) => (event) => {
    const { data } = event.nativeEvent;
    const nextPin = refs.current[index + 1] || nextInput?.current;
    if (!regex.test(data)) return (event.target.value = null);
    if (data && nextPin) nextPin.focus();
    event.target.value = data;
    onChange(refs.current.map(({ value }) => value).join(""));
  };

  const handleFocus = (index) => () => {
    const prevPin = refs?.current[index - 1];
    if (!prevPin) return;
    const val = prevPin?.value;
    if (!val) prevPin.focus();
  };

  const handleKeyDown = (index) => (event) => {
    const { key, target } = event;
    const { value } = target;
    if (key !== "Backspace") return;
    onChange(
      refs.current
        .map(({ value }) => value)
        .join("")
        .slice(0, -1)
    );
    const prevPin = refs.current[index - 1];
    if (!prevPin) return;
    if (value.length !== 0) return;
    prevPin.focus();
  };

  return (
    <Utility>
      <PinInputContainer id="zehutNumber" ref={ZehutInputRef}>
        {[...Array(4)].map((_, index) => (
          <Pin
            type="tel"
            ref={(el) => (refs.current[index] = el)}
            key={index}
            onChange={handleChange(index)}
            onKeyDown={handleKeyDown(index)}
            onFocus={handleFocus(index)}
          />
        ))}
      </PinInputContainer>
    </Utility>
  );
}

PinInput.propTypes = {
  onChange: PropTypes.func,
  ZehutInputRef: PropTypes.object,
  nextInput: PropTypes.object,
};

export default PinInput;

const Pin = styled.input`
  border: 1px solid transparent;
  transition: all 250ms ease-in;
  background-color: #f5f6f8;
  border-radius: 10px;
  caret-color: #81a0f6;
  font-size: 1.5rem;
  text-align: center;
  padding-block: 15px;
  padding-inline: 21px;
  width: 1rem;
  outline: none;
  font-family: "Poppins";
`;

const PinInputContainer = styled.div`
  border: 1px solid transparent;
  direction: ltr;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 6px;
`;

const Utility = styled.div`
  .invalid {
    & > ${Pin} {
      border: var(--invalid);
    }
  }
`;
