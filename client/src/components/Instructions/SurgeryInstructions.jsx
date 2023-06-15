import styled from "styled-components";
import { Translator } from "../Translation";
import SurgeryInstructionItem from "./SurgeryInstructionItem";

function SurgeryInstructions() {
  const surgeryInstructionsItems = ["fever", "medicalCondition", "fast"];

  return (
    <Container>
      <Title>
        <Translator>instructions-title</Translator>
      </Title>

      <ListContainer>
        {surgeryInstructionsItems.map((surgeryInstruction) => {
          return (
            <>
              <SurgeryInstructionItem surgeryInstruction={surgeryInstruction} />
              <Divider />
            </>
          );
        })}
      </ListContainer>

      <Button>
        <Label>
          {/* <CostumeCheckbox answerKey={answer}>
                        <Vcheck />
                      </CostumeCheckbox> */}
          <Translator>אישור הנחיות</Translator>
          <Input />
        </Label>
      </Button>
    </Container>
  );
}

export default SurgeryInstructions;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #84a4fc;
  border-radius: 0 20px 0 20px;
  margin-block-start: 2rem;
  padding: 1rem;
  color: #ffffff;
`;

const Title = styled.h2`
  font-size: 1.375rem;
`;

const ListContainer = styled.div``;

const Divider = styled.div`
  height: 1px;
  border-radius: 2px;
  background-color: #aabdf1;
  margin-block: 1rem;
  &:last-of-type {
    display: none;
  }
`;

const Input = styled.input.attrs({
  type: "radio",
})`
  display: none;
`;

const Button = styled.button`
  cursor: pointer;
  width: clamp(1.6rem, 50%, 13rem);
  background-color: #f02a4c;
  border: none;
  padding-block: 0.6875rem;
  padding-inline: 1rem;
  border-radius: 50px;
  align-self: center;
`;

const Label = styled.label`
  font-size: 1.2rem;
  color: white;
  &:has(${Input}:checked) {
    background-color: blue;
  }
`;
