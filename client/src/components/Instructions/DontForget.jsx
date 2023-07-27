import styled from "styled-components";
import { Card } from "../../stylings/VideoPageStyling";
import { Translator } from "../Translation";
import gist_v from "../../assets/Icons/gist_v.svg";

function DontForget() {
  return (
    <Card>
      <TopSection>
        <Title>
          <Translator>ביום הבדיקה לא לשכוח להביא</Translator>
        </Title>
        <img src="" alt="image" />
      </TopSection>

      <ListContainer>
        {dontForgetItems.map((dontForgetItem) => (
          <ListItem key={dontForgetItem}>
            <Translator>{dontForgetItem}</Translator>
          </ListItem>
        ))}
      </ListContainer>
      {/* 
      <Instructions
        href={instructions[userStringDetails]}
        target="_blank"
        id="Instructions"
      >
        <InstructionsIcon
          src={instructions_download}
          onClick={handleDownloadInstructionsClick}
        />
        <InstructionsText onClick={handleDownloadInstructionsClick}>
          <Translator>DontForget-DownloadInstructions</Translator>
        </InstructionsText>
      </Instructions> */}
    </Card>
  );
}

const dontForgetItems = [
  "IdentificationCertificate",
  "tofes17",
  "medicalReferral",
  "medicineList",
  "companion",
];

export default DontForget;

const TopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: 1.375rem;
`;

const ListContainer = styled.ul`
  margin-inline: 0;
  padding-inline-start: 1.5rem;
`;

const ListItem = styled.li`
  list-style-image: url(${gist_v});
  font-size: 1.1875rem;
`;

const Instructions = styled.a`
  text-decoration: none;
  color: #444444;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  gap: 0.625rem;
`;
const InstructionsIcon = styled.img`
  width: 4.563rem;
  height: 4.563rem;
`;
const InstructionsText = styled.div`
  font-size: 1.0625rem;
  font-weight: 500;
`;
