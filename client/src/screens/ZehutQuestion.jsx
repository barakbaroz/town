import styled from "styled-components";
import PinInput from "../components/Gister/PinInput";
import { Translator } from "../components/Translation";
import { useRef } from "react";
import AuthQuestionLayout from "../components/AuthQuestionLayout";

function ZehutQuestion() {
  const zehutInputRef = useRef(null);

  const handleZehutNumber = (zehut) => {
    //Update the corresponding state or something.
    console.log(zehut);
  };

  return (
    <AuthQuestionLayout index={1} key="zehut" nextRoute="DateOfBirth">
      <Title>
        <Translator>מה הן ארבעת הספרות האחרונות של תעודת הזהות שלך?</Translator>
      </Title>

      <PinInput ZehutInputRef={zehutInputRef} onChange={handleZehutNumber} />
    </AuthQuestionLayout>
  );
}

export default ZehutQuestion;

const Title = styled.h2`
  margin: 0;
  font-size: 1.1875rem;
`;
