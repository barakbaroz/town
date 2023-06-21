import styled from "styled-components";
import dont_forget from "../../assets/Icons/dont_forget.svg";
import { Translator } from "../Translation";
import PropTypes from "prop-types";

function MissingAnswers({ setOpen }) {
  return (
    <Container>
      <Image src={dont_forget} alt="Popup icon" />
      <TextsContainer>
        <Title>
          <Translator>זיהינו שחסרות תשובות</Translator>
        </Title>
        <Text>
          <Translator>
            להמשך תהליך ומעבר לצפייה בסרטון, יש לענות על כל השאלות
          </Translator>
        </Text>
      </TextsContainer>

      <Button onClick={() => setOpen(false)}>
        <Translator>הבנתי</Translator>
      </Button>
    </Container>
  );
}

export default MissingAnswers;

MissingAnswers.propTypes = {
  setOpen: PropTypes.func,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  text-align: center;
`;

const Image = styled.img``;

const TextsContainer = styled.div``;
const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  margin-block-end: 1rem;
`;
const Text = styled.h4`
  font-size: 1.25rem;
  font-weight: 400;
  margin-block-start: 0;
`;
const Button = styled.button`
  color: white;
  font-size: 1.25rem;
  cursor: pointer;
  width: 12rem;
  background-color: #f02a4c;
  border: none;
  padding-block: 0.6875rem;
  padding-inline: 1rem;
  border-radius: 50px;
  align-self: center;
  font-family: inherit;
`;
