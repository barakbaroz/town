import styled from "styled-components";
import { Translator } from "../Translation";
import SurgeryInstructionItem from "./SurgeryInstructionItem";
import { userContext } from "../../providers/UserProvider";
import { useContext } from "react";
import white_v from "../../assets/Icons/white_v.svg";

const surgeryInstructionsItems = ["fever", "medicalCondition", "feast"];
function SurgeryInstructions() {
  const userInfo = useContext(userContext);
  const { age } = userInfo.Case;
  const surgeryInstructionsByAge = [...surgeryInstructionsItems];
  surgeryInstructionsByAge[2] = `${surgeryInstructionsByAge[2]}_${
    age === "0-2" ? "0-2" : "3-18"
  }`;

  return (
    <Container>
      <Title>
        <Translator>instructions-title</Translator>
      </Title>

      <ListContainer>
        {surgeryInstructionsByAge.map((surgeryInstruction) => (
          <>
            <SurgeryInstructionItem surgeryInstruction={surgeryInstruction} />
            <Divider />
          </>
        ))}
      </ListContainer>

      <Button>
        <Label>
          <CostumeCheckbox>
            <Vcheck />
          </CostumeCheckbox>
          <CheckBoxText>
            <Translator>אישור הנחיות</Translator>
          </CheckBoxText>
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
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.375rem;
`;

const ListContainer = styled.div`
  margin-block: 2rem;
`;

const Divider = styled.div`
  height: 1px;
  border-radius: 2px;
  background-color: #aabdf1;
  margin-block: 1.5rem;
  &:last-of-type {
    display: none;
  }
`;

const Button = styled.button`
  cursor: pointer;
  width: 12rem;
  background-color: #f02a4c;
  border: none;
  padding-block: 0.6875rem;
  padding-inline: 1rem;
  border-radius: 50px;
  align-self: center;
  font-family: inherit;
`;

const Input = styled.input.attrs({
  type: "radio",
})`
  display: none;
`;

const CheckBoxText = styled.div`
  &:has(~ ${Input}:checked) {
    display: none;
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.25rem;
  cursor: pointer;
  padding-block: 0.5rem;
  border: none;
  padding-inline: 1rem;
  border-radius: 50px;
  background-color: #f02a4c;
  color: white;
`;

const Vcheck = styled.img.attrs({
  src: white_v,
  alt: "V",
})`
  width: 1.2rem;
  &:has(~ ${Input}:checked) {
    display: block;
  }
`;

const CostumeCheckbox = styled.div`
  --size: 1.625rem;
  min-width: var(--size);
  min-height: var(--size);
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  display: none;
  &:has(~ ${Input}:checked) {
    display: flex;
  }
`;
