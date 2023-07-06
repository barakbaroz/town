import styled from "styled-components";
import PropTypes from "prop-types";

function ProgressBar({ answeresIndexes }) {
  return (
    <Container>
      {answeresIndexes.map((answerIndex, index) => (
        <Block key={`${index}-${answerIndex}`} answered={answerIndex} />
      ))}
    </Container>
  );
}

ProgressBar.propTypes = {
  answeresIndexes: PropTypes.array,
};

export default ProgressBar;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 5px;
  padding-block: 25px;
  padding-inline: var(--screen-padding-inline);
`;

const Block = styled.div`
  /* width: 50px; */
  height: 5px;
  flex: 1;
  border-radius: 10px;
  /* border: 1px solid black; */
  background-color: ${({ answered }) => (answered ? "#F02A4C" : "#fff")};
`;
