import { useRef } from "react";
import styled from "styled-components";
import GisterInput from "./GisterInput";
import PropTypes from "prop-types";
import { FieldTitle } from "./Giser.styled";
import { PinInput } from "@gistmed/gist-ui";

export default function PatientInformation({ casesDataRef }) {
  const phoneInputRef = useRef(null);
  const emailInputRef = useRef(null);

  const handleSSN = (SSN) => {
    casesDataRef.current.socialSecurityNumber = SSN;
    document.getElementById("socialSecurityNumber").classList.remove("invalid");
  };

  const handlePhoneNumber = (phoneNumber) => {
    casesDataRef.current.phoneNumber = phoneNumber;
    document.getElementById("contacts").classList.remove("invalid");
  };

  const handleEmailInput = (email) => {
    casesDataRef.current.email = email;
    document.getElementById("contacts").classList.remove("invalid");
  };

  return (
    <Container>
      <InputContainer>
        <FieldTitle>Social Security Number - 4 last digits</FieldTitle>
        <PinInput
          length={4}
          onChange={handleSSN}
          id="socialSecurityNumber"
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
            nextfocus={emailInputRef}
          />
        </InputContainer>
        <InputContainer>
          <FieldTitle>E-mail address</FieldTitle>
          <GisterInput
            type="email"
            inputRef={emailInputRef}
            onChange={handleEmailInput}
          />
        </InputContainer>
      </Contacts>
      <ContactsError>
        Please enter the patient’s mobile number
        <br />
        or Email address. You can add both.
      </ContactsError>
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

const ContactsError = styled.p`
  display: none;
  color: var(--invalid);
`;

const Container = styled.div`
  --field-line-height: 2rem;
  --field-padding-block: 0.813rem;
  --field-font-size: 1.125rem;
  --field-font-family: "Poppins";
  display: flex;
  flex-direction: column;
  gap: 22px;
  &:has(${Contacts}.invalid) {
    ${ContactsError} {
      display: block;
    }
  }
`;
