import { useRef } from "react";
import styled from "styled-components";
import PinInput from "./PinInput";
import PhoneInput from "./PhoneInput";
import { phone } from "phone";
import PropTypes from "prop-types";

function PatientInformation({ casesDataRef }) {
  const zehutInputRef = useRef(null);
  const phoneInputRef = useRef(null);

  const handleZehutNumber = (zehut) => {
    casesDataRef.current.zehutNumber = zehut;
    zehutInputRef.current.classList.remove("invalid");
  };

  const handlePhoneNumber = (number) => {
    const { phoneNumber } = phone(number);
    casesDataRef.current.phoneNumber = phoneNumber;
    phoneInputRef.current.classList.remove("invalid");
  };

  return (
    <Container>
      <Row>
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
      </Row>
    </Container>
  );
}
PatientInformation.propTypes = {
  casesDataRef: PropTypes.object,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
const Title = styled.div`
  color: #444444;
  padding: 0.825rem 0;
  font-size: 1.438rem;
  font-weight: 400;
  width: max-content;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
`;
export default PatientInformation;
