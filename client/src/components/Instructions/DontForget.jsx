import styled from "styled-components";
import { LanguageContext, Translator } from "../Translation";
import gist_v from "../../assets/Icons/gist_v.svg";
import dont_forget from "../../assets/Icons/dont_forget.svg";
import instructions_download from "../../assets/Icons/download_instruction.svg";
import { useContext } from "react";
import { userContext } from "../../providers/UserProvider";
import instructions from "../../assets/Instructions";
import postAnalytics from "../../utilities/postAnalytics";
import { useParams } from "react-router-dom";

function DontForget() {
  const { language } = useContext(LanguageContext);
  const userInfo = useContext(userContext);
  const { userId } = useParams();
  const { age, gender } = userInfo.Case;
  const userStringDetails = `${gender}_${age}_${language}`;
  const handleDownloadInstructionsClick = () => {
    postAnalytics({
      userId,
      type: `download-instructions-clicked`,
    });
  };
  return (
    <Container>
      <TopContent>
        <Title>
          <Translator>DontForget-Title</Translator>
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
      </Instructions>
    </Container>
  );
}

const dontForgetItems = [
  "SummaryDocuments",
  "medicineList",
  "bloodTest",
  "results",
  "tofes17",
];

export default DontForget;

const Container = styled.div`
  padding-block: 1rem;
  display: flex;
  flex-direction: column;
  color: var(--text-color);
  padding-inline: 1.5625rem;
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
  width: 4.5625rem;
  height: 4.5625rem;
`;
const InstructionsText = styled.div`
  font-size: 1.0625rem;
  font-weight: 500;
`;
