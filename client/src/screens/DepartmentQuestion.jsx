import styled from "styled-components";
import { Translator } from "../components/Translation";
import AuthQuestionLayout from "../components/AuthQuestionLayout";
import { useContext } from "react";
import { AuthenticationContext } from "../layouts/AuthenticationLayout";

function DepartmentQuestion() {
  const { updateAnswers } = useContext(AuthenticationContext);
  const handleSelect = (e) => {
    updateAnswers({
      questionName: "department",
      answer: e.target.value,
      nextRoute: "Department",
    });
  };

  return (
    <AuthQuestionLayout index={3} key="Department">
      <Title>
        <Translator>לאיזו מחלקה זומנת?</Translator>
      </Title>

      <SelectContainer>
        <Select
          id="cars"
          name="carlist"
          defaultValue=""
          onChange={handleSelect}
        >
          <Option value="" disabled hidden>
            <Translator>לחץ לבחירת תשובה</Translator>
          </Option>
          <Option value="volvo">Volvo</Option>
          <Option value="saab">Saab</Option>
          <Option value="opel">Opel</Option>
          <Option value="audi">Audi</Option>
        </Select>
      </SelectContainer>
    </AuthQuestionLayout>
  );
}

export default DepartmentQuestion;

const SelectContainer = styled.div`
  position: relative;
  &::after {
    font-size: 1rem;
    text-align: center;
    content: "X";
    color: #84a4fc;
    position: absolute;
    pointer-events: none;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    margin-inline-end: 10px;
  }
`;

const Select = styled.select`
  font-size: 1.1875rem;
  -webkit-appearance: none;
  outline: none;
  background-color: #f2f2f2;
  color: #b7b7b7;
  padding-block: 1rem;
  padding-inline: 2rem;
  border-radius: 8px;
  text-align: center;
`;
const Option = styled.option`
  text-align: inherit;
`;

const Title = styled.h2``;
