import { useRef } from "react";
import styled from "styled-components";
import PinInput from "./PinInput";
import PhoneInput from "./PhoneInput";
import PropTypes from "prop-types";
import { FieldTitle } from "./Giser.styled";
import LanguageDropDown from "./LanguageDropDown";

function PatientInformation({ casesDataRef }) {
  const zehutInputRef = useRef(null);
  const phoneInputRef = useRef(null);
  const yearOfBirthRef = useRef(null);

  const handleZehutNumber = (zehut) => {
    casesDataRef.current.zehutNumber = zehut;
    zehutInputRef.current.classList.remove("invalid");
  };

  const handlePhoneNumber = (phoneNumber) => {
    casesDataRef.current.phoneNumber = phoneNumber;
    phoneInputRef.current.classList.remove("invalid");
  };

  const handleYearOfBirth = (yearOfBirth) => {
    casesDataRef.current.yearOfBirth = yearOfBirth;
    yearOfBirthRef.current.classList.remove("invalid");
  };

  const handleLanguage = (language) => {
    casesDataRef.current.language = language;
  };

  return (
    <Container>
      <InputContainer>
        <FieldTitle>4 ספרות אחרונות של ת.ז.</FieldTitle>
        <PinInput
          ContainerRef={zehutInputRef}
          nextInput={phoneInputRef}
          onChange={handleZehutNumber}
          id="zehutNumber"
        />
      </InputContainer>
      <InputContainer>
        <FieldTitle>נייד המטופל</FieldTitle>
        <PhoneInput
          phoneInputRef={phoneInputRef}
          onChange={handlePhoneNumber}
        />
      </InputContainer>
      <InputContainer>
        <FieldTitle>שפה</FieldTitle>
        <LanguageDropDown onChange={handleLanguage} />
      </InputContainer>
      <InputContainer>
        <FieldTitle>שנת לידה</FieldTitle>
        <PinInput
          ContainerRef={yearOfBirthRef}
          onChange={handleYearOfBirth}
          id="yearOfBirth"
        />
      </InputContainer>
    </Container>
  );
}
PatientInformation.propTypes = {
  casesDataRef: PropTypes.object,
};

const Container = styled.div`
  --field-line-height: 2rem;
  --field-padding-block: 0.813rem;
  --field-font-size: 1.125rem;
  --field-font-family: "Poppins";
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
`;
export default PatientInformation;
