import { useRef } from "react";
import styled from "styled-components";
import PinInput from "./PinInput";
import PhoneInput from "./PhoneInput";
import PropTypes from "prop-types";

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
        <Title>4 ספרות אחרונות של ת.ז.</Title>
        <PinInput
          ZehutInputRef={zehutInputRef}
          nextInput={phoneInputRef}
          onChange={handleZehutNumber}
        />
      </InputContainer>
      <InputContainer>
        <Title>נייד המטופל</Title>
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
  display: flex;
  flex-direction: column;
  gap: 21px;
`;

const Title = styled.div`
  color: #444444;
  padding: 0.825rem 0;
  font-size: 1.438rem;
  font-weight: 400;
  width: max-content;
  padding: 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  gap: 9px;
`;
export default PatientInformation;
