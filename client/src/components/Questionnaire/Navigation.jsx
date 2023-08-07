import styled from "styled-components";
import PropTypes from "prop-types";

function Navigation({ index, questionsSize }) {
  return (
    <Container>
      <h3
        style={{
          paddingInline: "20%",
          fontSize: "1.375rem",
          fontFamily: "Poppins",
          margin: "0",
        }}
      >
        {index + 1}
        <span style={{ marginInline: "0.4rem" }}>/</span>
        {questionsSize}
      </h3>
    </Container>
  );
}

Navigation.propTypes = {
  index: PropTypes.number,
  questionsSize: PropTypes.number,
};

export default Navigation;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-block: 16px;
  padding-inline: var(--screen-padding-inline);
`;
