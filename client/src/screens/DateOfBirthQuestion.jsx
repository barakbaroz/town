import styled from "styled-components";
import { Translator } from "../components/Translation";
import AuthQuestionLayout from "../components/AuthQuestionLayout";

function DateOfBirthQuestion() {
  return (
    <AuthQuestionLayout index={2} key="DateOfBirth" nextRoute="Department">
      <Title>
        <Translator>מתי נולדת?</Translator>
      </Title>
    </AuthQuestionLayout>
  );
}

export default DateOfBirthQuestion;
const Title = styled.h2``;
