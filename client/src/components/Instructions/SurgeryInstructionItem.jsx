import styled from "styled-components";
import { Translator } from "../Translation";

function SurgeryInstructionItem({ surgeryInstruction }) {
  return (
    <Container>
      <InstructionIcon></InstructionIcon>
      <Text>
        <Translator>{surgeryInstruction}</Translator>
      </Text>
    </Container>
  );
}

export default SurgeryInstructionItem;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-inline: 30px;
  gap: 1rem;
`;

const Text = styled.p`
  font-size: 1.125rem;
`;

const InstructionIcon = styled.div`
  min-width: 50px;
  min-height: 50px;
  background-color: white;
  border-radius: 50%;
`;
