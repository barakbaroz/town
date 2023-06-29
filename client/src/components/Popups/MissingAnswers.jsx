import styled from "styled-components";
import { Translator } from "../Translation";
import PropTypes from "prop-types";
import Lottie from "lottie-react";
import notificationCopy from "../../assets/Lotties/notificationCopy.json";

function MissingAnswers({ open, setOpen }) {
  return (
    <Container>
      <NotificationCopyLottie
        animationData={notificationCopy}
        loop={false}
        play={open}
        autoplay={!open}
      />
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

const NotificationCopyLottie = styled(Lottie)`
  width: 200px;
`;

const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
  padding: 0;
`;
const Text = styled.h4`
  font-size: 1.25rem;
  font-weight: 400;
  margin-block-end: 75px;
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
