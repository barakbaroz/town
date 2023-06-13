import styled from "styled-components";

function ProgressBar({ answeresIndexes }) {
  return (
    <Container>
      {answeresIndexes.map((answereIndex) => (
        <Block answered={answereIndex} />
      ))}
    </Container>
  );
}

export default ProgressBar;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 5px;
  padding-block: 32px;
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
