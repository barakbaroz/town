import styled from "styled-components";
import { Translator } from "../Translation";
import fever from "../../assets/Icons/fever.svg";
import medicalCondition from "../../assets/Icons/medical_condition.svg";
import feast from "../../assets/Icons/feast.svg";
import PropTypes from "prop-types";

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

SurgeryInstructionItem.propTypes = {
  surgeryInstruction: PropTypes.string,
};

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const Text = styled.p`
  font-size: 1.1875rem;
  margin: 0;
`;

const InstructionIcon = styled.img`
  width: 47px;
  height: 47px;
`;
