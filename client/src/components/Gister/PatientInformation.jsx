import { useRef } from "react";
import styled from "styled-components";
import PinInput from "./PinInput";
import PhoneInput from "./PhoneInput";
import PropTypes from "prop-types";
import { FieldTitle } from "./Giser.styled";

function PatientInformation({ casesDataRef }) {
  const phoneInputRef = useRef(null);

  const handleZehutNumber = (zehut) => {
    casesDataRef.current.socialSecurityNumber = zehut;
    document.getElementById("socialSecurityNumber").classList.remove("invalid");
  };

  const handlePhoneNumber = (phoneNumber) => {
    casesDataRef.current.phoneNumber = phoneNumber;
    document.getElementById("phoneNumber").classList.remove("invalid");
  };

  return (
    <Container>
      <InputContainer>
        <FieldTitle>4 ספרות אחרונות של ת.ז.</FieldTitle>
        <PinInput
          nextInput={phoneInputRef}
          onChange={handleZehutNumber}
          id="socialSecurityNumber"
        />
      </InputContainer>
      <InputContainer>
        <FieldTitle>נייד המטופל</FieldTitle>
        <PhoneInput
          phoneInputRef={phoneInputRef}
          onChange={handlePhoneNumber}
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
