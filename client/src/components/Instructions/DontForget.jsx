import styled from "styled-components";
import { Card, Icon, Title, TopSection } from "./Card.Style";
import { Translator } from "../Translation";
import gist_v from "../../assets/Icons/gist_v.svg";
import dont_forget from "../../assets/Icons/dont_forget.svg";

export default function DontForget() {
  return (
    <Card>
      <TopSection>
        <Title>
          <Translator>Dont-Forget-Title</Translator>
        </Title>
        <Icon src={dont_forget} alt="dont forget" />
      </TopSection>

      <ListContainer>
        {dontForgetItems.map((dontForgetItem) => (
          <ListItem key={dontForgetItem}>
            <Translator>Dont-Forget-{dontForgetItem}</Translator>
          </ListItem>
        ))}
      </ListContainer>
    </Card>
  );
}

const dontForgetItems = ["identification", "companion"];

const ListContainer = styled.ul`
  padding-inline-start: 1.5rem;
  margin: 0;
`;

const ListItem = styled.li`
  list-style-image: url(${gist_v});
  font-size: 1.1875rem;
  margin-block: 17px;
`;
