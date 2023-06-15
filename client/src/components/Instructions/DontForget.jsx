import styled from "styled-components";
import { Translator } from "../Translation";
import gist_v from "../../assets/Icons/gist_v.svg";

function DontForget() {
  const dontForgetItems = [
    "SummaryDocuments",
    "medicineList",
    "bloodTest",
    "results",
    "tofes17",
  ];

  return (
    <Container>
      <TopContent>
        <Title>
          <Translator>לא לשכוח להביא לפגישת טרום ניתוח</Translator>
        </Title>

        <Icon />
      </TopContent>

      <ListContainer>
        {dontForgetItems.map((dontForgetItem) => (
          <ListItem key={dontForgetItem}>
            <Translator>{dontForgetItem}</Translator>
          </ListItem>
        ))}
      </ListContainer>

      <Instructions>
        <InstructionsIcon>{/* image will be placed here */}</InstructionsIcon>
        <InstructionsText>
          <Translator>instruction-download</Translator>
        </InstructionsText>
      </Instructions>
    </Container>
  );
}

export default DontForget;

const Container = styled.div`
  padding-block: 1rem;
  margin-inline: 20px;
  margin-block-start: 1.5rem;

  display: flex;
  flex-direction: column;
  color: #444444;
  padding-inline: 1rem;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 25px;
  background-color: white;
`;

const TopContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: 1.375rem;
`;

const Icon = styled.div`
  min-height: 60px;
  min-width: 60px;
  border-radius: 50%;
  background-color: #f02a4c;
`;

const ListContainer = styled.ul`
  margin-inline: 0;
  padding-inline: 1rem;
`;

const ListItem = styled.li`
  list-style-image: url(${gist_v});
`;

const Instructions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
`;
const InstructionsIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #f02a4c;
`;
const InstructionsText = styled.div``;
