import styled from "styled-components";
import PropTypes from "prop-types";
import HeartConditions from "./HeartConditions";
import Symptoms from "./Symptoms";

function MedicalBackground({ casesDataRef }) {
  return (
    <Container>
      <HeartConditions casesDataRef={casesDataRef} />
      <Symptoms casesDataRef={casesDataRef} />
    </Container>
  );
}

MedicalBackground.propTypes = {
  casesDataRef: PropTypes.shape({ current: PropTypes.object }),
};

export default MedicalBackground;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
