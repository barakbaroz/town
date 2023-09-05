import PropTypes from "prop-types";
import styled from "styled-components";
import { Translator } from "../Translation";
import { Icon, Title, TopSection } from "./Card.Style";
import redFlag from "../../assets/Icons/red_Flag.svg";
import { useContext } from "react";
import { userContext } from "../../providers/UserProvider";

function Cpap() {
  const { Questionnaires } = useContext(userContext);
  const cpapAnsweredYes = Questionnaires.find(
    (questionObj) =>
      questionObj.questionKey === "cpap" && questionObj.answerKey === "Yes"
  );

  return (
    <Container show={cpapAnsweredYes}>
      <TopContent>
        <Title>
          <Translator>Cpap-Title</Translator>
        </Title>
        <Icon src={redFlag} alt="consentForm" />
      </TopContent>

      <Text>
        <Translator>Cpap-Information</Translator>
      </Text>
    </Container>
  );
}

export default Cpap;

Cpap.propTypes = {
  show: PropTypes.bool,
};

const Container = styled.div`
  display: ${({ show }) => (show ? "flex" : "none")};
  flex-direction: column;
  margin-inline: var(--screen-margin);
  border: 2px solid #ffffff;
  border-radius: 20px;
  padding-inline: 25px;
  padding-block: 25px;
  background-color: #ffffff40;
`;

const Text = styled.p`
  font-size: 1.188rem;
  margin: 0;
`;
const TopContent = styled(TopSection)`
  margin-block-end: 1.25rem;
`;
