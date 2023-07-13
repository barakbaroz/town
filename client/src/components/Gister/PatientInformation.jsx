import { useRef } from "react";
import styled from "styled-components";
import PinInput from "./PinInput";
import PhoneInput from "./PhoneInput";
import PropTypes from "prop-types";
import { FieldTitle } from "./Giser.styled";

function PatientInformation({ casesDataRef }) {
  const zehutInputRef = useRef(null);
  const phoneInputRef = useRef(null);

  const handleZehutNumber = (zehut) => {
    casesDataRef.current.zehutNumber = zehut;
    zehutInputRef.current.classList.remove("invalid");
  };

  const handlePhoneNumber = (number) => {
    casesDataRef.current.phoneNumber = number;
    phoneInputRef.current.classList.remove("invalid");
  };

  return (
    <Container>
      <InputContainer>
        <FieldTitle>4 ספרות אחרונות של ת.ז.</FieldTitle>
        <PinInput
          ZehutInputRef={zehutInputRef}
          nextInput={phoneInputRef}
          onChange={handleZehutNumber}
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
  --field-font-size: 1.5rem;
  --field-font-family: "Poppins";
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
`;
export default PatientInformation;
