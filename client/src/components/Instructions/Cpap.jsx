import PropTypes from "prop-types";
import styled from "styled-components";
import { Translator } from "../Translation";
import { Icon, Title, TopSection } from "./Card.Style";
import CPAP from "../../assets/Icons/Cpap.svg";

function Cpap({ show }) {
  return (
    <Container show={show}>
      <TopSection>
        <Title>
          <Translator>Cpap-Title</Translator>
        </Title>
        <Icon src={CPAP} alt="consentForm" />
      </TopSection>

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
  margin-inline: var(--screen-margin);
  border: 2px solid #ffffff;
  border-radius: 20px;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  padding-inline: 25px;
  padding-block: 25px;
  background-color: #ffffff40;
`;

const Text = styled.p`
  font-size: 1.188rem;
  margin: 0;
`;
