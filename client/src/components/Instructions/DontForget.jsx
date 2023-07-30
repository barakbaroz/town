import styled from "styled-components";
import { Card, Icon } from "./style";

import { Translator } from "../Translation";
import gist_v from "../../assets/Icons/gist_v.svg";
import dont_forget from "../../assets/Icons/dont_forget.svg";

function DontForget() {
  return (
    <Card>
      <TopSection>
        <Title>
          <Translator>ביום הבדיקה לא לשכוח להביא</Translator>
        </Title>
        <Icon src={dont_forget} alt="dontForget" />
      </TopSection>

      <ListContainer>
        {dontForgetItems.map((dontForgetItem) => (
          <ListItem key={dontForgetItem}>
            <Translator>{dontForgetItem}</Translator>
          </ListItem>
        ))}
      </ListContainer>

      <InstructionText>
        <Translator>
          יש להגיע לבדיקה עם מלווה (אין לנהוג לאחר הבדיקה למשך 12 שעות)
        </Translator>
      </InstructionText>
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

const InstructionText = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 1.188rem;
`;

const ListContainer = styled.ul`
  margin-inline: 0;
  padding-inline-start: 1.5rem;
`;

const ListItem = styled.li`
  list-style-image: url(${gist_v});
  font-size: 1.1875rem;
`;
