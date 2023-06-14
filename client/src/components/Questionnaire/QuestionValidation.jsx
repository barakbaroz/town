import styled from "styled-components";
import white_v from "../../assets/Icons/white_v.svg";
import Translator from "../Translation/Translator";
import PropTypes from "prop-types";

function QuestionValidation({ questionKey, questionProperties, value }) {
  return (
    <Container>
      <Text>
        {/* <Translator>{questionKey}</Translator> */}
        <Translator>problemsInFamily</Translator>
      </Text>

      <AnswersButtons>
        {questionProperties.options.map((answer) => {
          return (
            <Label key={`${questionKey}-${answer}`}>
              {answer}
              <CostumeCheckbox answerKey={answer}>
                <Vcheck />
              </CostumeCheckbox>
              <Input name={questionKey} defaultChecked={answer === value} />
            </Label>
          );
        })}
      </AnswersButtons>
    </Container>
  );
}

QuestionValidation.propTypes = {
  questionKey: PropTypes.string,
  questionProperties: PropTypes.object,
  questionIndex: PropTypes.number,
  value: PropTypes.string,
};

export default QuestionValidation;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  gap: 2rem;
`;

const Text = styled.div`
  font-size: 1rem;
  align-self: flex-start;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const Input = styled.input.attrs({
  type: "radio",
})`
  display: none;
`;

const Vcheck = styled.img.attrs({
  src: white_v,
  alt: "V",
})`
  display: none;
`;

const colorByType = {
  yes: "#84A4FC",
  no: "#F02A4C",
};

const CostumeCheckbox = styled.div`
  --size: 1.6rem;
  min-width: var(--size);
  min-height: var(--size);
  border-radius: 50%;
  background-color: white;
  box-shadow: 0px 3px 6px #00000029;
  display: flex;
  align-items: center;
  justify-content: center;
  &:has(~ ${Input}:checked) {
    background-color: ${({ answerKey }) => colorByType[answerKey]};
    & > ${Vcheck} {
      display: block;
    }
  }
`;

const AnswersButtons = styled.div`
  display: flex;
  gap: 1rem;
  &:not(:has(${Input}:checked)) > ${Label} > ${CostumeCheckbox} {
    border: 1px solid #f32548;
  }
`;
