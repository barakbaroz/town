import styled from "styled-components";
import { Translator } from "../Translation";
import fever from "../../assets/Icons/fever.svg";
import medicalCondition from "../../assets/Icons/medicalCondition.svg";
import feast from "../../assets/Icons/feast.svg";

const Icons = { fever, medicalCondition, feast };

function SurgeryInstructionItem({ surgeryInstruction }) {
  return (
    <Container>
      <InstructionIcon
        src={Icons[surgeryInstruction]}
        alt={surgeryInstruction}
      />
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

const InstructionIcon = styled.img`
  min-width: 50px;
  min-height: 50px;
  background-color: white;
  border-radius: 50%;
`;
