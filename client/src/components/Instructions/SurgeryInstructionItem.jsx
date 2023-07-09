import styled from "styled-components";
import { Translator } from "../Translation";
import PropTypes from "prop-types";

function SurgeryInstructionItem({ icon, paragraphs }) {
  return (
    <Container>
      <InstructionIcon src={icon} />
      <ParagraphsContainer>
        {paragraphs.map((paragraph) => (
          <Text key={paragraph}>
            <Translator>{paragraph}</Translator>
          </Text>
        ))}
      </ParagraphsContainer>
    </Container>
  );
}

export default SurgeryInstructionItem;

SurgeryInstructionItem.propTypes = {
  icon: PropTypes.string,
  paragraphs: PropTypes.arrayOf(String),
};

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 25px;
`;

const Text = styled.p`
  white-space: break-spaces;
  font-size: 1.1875rem;
  margin: 0;
`;

const InstructionIcon = styled.img`
  width: 46px;
  height: 47px;
`;

const ParagraphsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 1.1rem;
`;
