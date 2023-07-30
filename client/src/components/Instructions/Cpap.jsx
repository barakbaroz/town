import PropTypes from "prop-types";
import styled from "styled-components";
import { Translator } from "../Translation";
import { Icon } from "./style";
import CPAP from "../../assets/Icons/Cpap.svg";

function Cpap({ show }) {
  return (
    <Container show={show}>
      <Wrapper>
        <TopSection>
          <Title>
            <Translator>Cpap-Title</Translator>
          </Title>
          <Icon src={CPAP} alt="consentForm" />
        </TopSection>

        <Text>
          <Translator>Cpap-Information</Translator>
        </Text>
      </Wrapper>
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
  align-items: center;
  margin-inline: var(--screen-margin);
  gap: 25px;
  border: 2px solid #ffffff;
  border-radius: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  padding-inline: 25px;
  padding-block: 25px;
`;

const TopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;
const Title = styled.h1`
  margin: 0;
  font-size: 1.375rem;
`;

const Text = styled.p`
  font-size: 1.188rem;
  margin: 0;
`;
