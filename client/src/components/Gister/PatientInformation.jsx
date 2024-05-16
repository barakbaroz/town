import { useRef } from "react";
import styled from "styled-components";
import GisterInput from "./GisterInput";
import PropTypes from "prop-types";
import { FieldTitle } from "./Giser.styled";
import { PinInput } from "@gistmed/gist-ui";

export default function PatientInformation({ casesDataRef }) {
  const phoneInputRef = useRef(null);

  const handleYearOfBirth = (yearOfBirth) => {
    casesDataRef.current.yearOfBirth = yearOfBirth;
    document.getElementById("yearOfBirth").classList.remove("invalid");
  };

  const handlePhoneNumber = (phoneNumber) => {
    casesDataRef.current.phoneNumber = phoneNumber;
    document.getElementById("contacts").classList.remove("invalid");
  };

  return (
    <Container>
      <InputContainer>
        <FieldTitle>Year of birth</FieldTitle>
        <PinInput
          length={4}
          onChange={handleYearOfBirth}
          id="yearOfBirth"
          nextfocus={phoneInputRef}
        />
      </InputContainer>
      <Contacts id="contacts">
        <InputContainer>
          <FieldTitle>Mobile Number</FieldTitle>
          <GisterInput
            type="tel"
            maxLength={10}
            validate={/(^[0-9]+$|^$)/}
            inputRef={phoneInputRef}
            onChange={handlePhoneNumber}
          />
        </InputContainer>
      </Contacts>
    </Container>
  );
}
PatientInformation.propTypes = {
  casesDataRef: PropTypes.object,
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
`;

const Contacts = styled.div`
  display: inherit;
  flex-direction: inherit;
  gap: inherit;
  width: fit-content;
  &.invalid {
    border: 1px solid var(--invalid);
    padding: 15px;
    border-radius: 15px;
  }
`;

const Container = styled.div`
  --field-line-height: 2rem;
  --field-padding-block: 0.813rem;
  --field-font-size: 1.125rem;
  --field-font-family: "Poppins";
  display: flex;
  flex-direction: column;
  gap: 22px;
`;
