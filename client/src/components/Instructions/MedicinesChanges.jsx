import PropTypes from "prop-types";
import styled from "styled-components";
import { Translator } from "../Translation";
import { Card, Icon, Title, TopSection } from "./Card.Style";
import redFlag from "../../assets/Icons/red_Flag.svg";
import { useUser } from "../../providers/UserProvider";
import gist_v from "../../assets/Icons/gist_v.svg";

export default function MedicinesChanges() {
  const { Questionnaires } = useUser();
  const yesAnswers = Questionnaires.filter(
    (questionObj) =>
      questionObj.questionKey !== "colonoscopyBefore" &&
      questionObj.answerKey === "Yes"
  ).map((questionObj) => questionObj.questionKey);

  return (
    <Container show={yesAnswers.length > 0}>
      <TopContent>
        <Title>
          <Translator>MedicinesChanges-Title</Translator>
        </Title>
        <Icon src={redFlag} alt="consentForm" />
      </TopContent>
      <ListContainer>
        {yesAnswers.map((answer) => (
          <ListItem key={answer}>
            <Translator>MedicinesChanges-{answer}</Translator>
          </ListItem>
        ))}
      </ListContainer>
    </Container>
  );
}

MedicinesChanges.propTypes = {
  show: PropTypes.bool,
};

const Container = styled(Card)`
  display: ${({ show }) => (show ? "flex" : "none")};
  flex-direction: column;
  margin-inline: var(--screen-margin);
  border: 2px solid #ffffff;
  border-radius: 20px;
  padding-inline: 25px;
  padding-block: 25px;
  background-color: #ffffff40;
  box-shadow: none;
`;
const ListContainer = styled.ul`
  padding-inline-start: 1.5rem;
  margin: 0;
`;
const ListItem = styled.li`
  font-size: 1.188rem;
  margin-block: 0.333rem;
  list-style-image: url(${gist_v});
`;
const TopContent = styled(TopSection)`
  margin-block-end: 1.25rem;
`;
