import styled from "styled-components";
import { Translator } from "../Translation";
import instructionsIcons from "../../assets/Icons/PersonalInstructions";
import PropTypes from "prop-types";

function SurgeryInstructionItem({ surgeryInstruction }) {
  return (
    <Container>
      <InstructionIcon
        src={instructionsIcons[surgeryInstruction]}
        alt={surgeryInstruction}
      />
      <Text>
        <Translator>{surgeryInstruction}</Translator>
      </Text>
    </Container>
  );
}

export default SurgeryInstructionItem;

SurgeryInstructionItem.propTypes = {
  surgeryInstruction: PropTypes.string,
};

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const Text = styled.p`
  white-space: break-spaces;
  font-size: 1.1875rem;
  margin: 0;
`;

const InstructionIcon = styled.img`
  width: 47px;
  height: 47px;
`;
