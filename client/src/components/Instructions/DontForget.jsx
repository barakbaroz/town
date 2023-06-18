import styled from "styled-components";
import { Translator } from "../Translation";
import gist_v from "../../assets/Icons/gist_v.svg";
import dont_forget from "../../assets/Icons/dont_forget.svg";
import instructions_download from "../../assets/Icons/download_instruction.svg";

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

        <DontForgetIcon src={dont_forget} lt="dont forget" />
      </TopContent>

      <ListContainer>
        {dontForgetItems.map((dontForgetItem) => (
          <ListItem key={dontForgetItem}>
            <Translator>{dontForgetItem}</Translator>
          </ListItem>
        ))}
      </ListContainer>

      <Instructions>
        <InstructionsIcon src={instructions_download} />
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
  margin-block-start: 3.75rem;
  display: flex;
  flex-direction: column;
  color: #444444;
  padding-inline: 1.5rem;
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

const DontForgetIcon = styled.img`
  min-width: 100px;
  aspect-ratio: 1;
`;

const ListContainer = styled.ul`
  margin-inline: 0;
  padding-inline-start: 1.5rem;
`;

const ListItem = styled.li`
  list-style-image: url(${gist_v});
  font-size: 1.125rem;
`;

const Instructions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
`;
const InstructionsIcon = styled.img`
  width: 4.5625rem;
  height: 4.5625rem;
`;
const InstructionsText = styled.div`
  font-size: 1.0625rem;
  font-weight: 500;
`;
