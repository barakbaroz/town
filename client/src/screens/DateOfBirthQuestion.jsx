import { useRef } from "react";
import styled from "styled-components";
import { Translator } from "../components/Translation";
import AuthQuestionLayout from "../components/AuthQuestionLayout";
import PinInput from "../components/Gister/PinInput";

function DateOfBirthQuestion() {
  const dateOfBirthInputRef = useRef(null);

  return (
    <AuthQuestionLayout index={2} key="DateOfBirth" nextRoute="Department">
      <Title>
        <Translator>מתי נולדת?</Translator>
      </Title>

      <PinInput ZehutInputRef={zehutInputRef} onChange={handleZehutNumber} />
    </AuthQuestionLayout>
  );
}

export default DateOfBirthQuestion;
const Title = styled.h2``;
