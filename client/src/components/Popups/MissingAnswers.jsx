import { useRef, useEffect } from "react";
import styled from "styled-components";
import { Translator } from "../Translation";
import PropTypes from "prop-types";
import Lottie from "lottie-react";
import notificationCopy from "../../assets/Lotties/notificationCopy.json";

function MissingAnswers({ open, setOpen }) {
  const lottieRef = useRef(null);
  useEffect(() => {
    if (open) lottieRef.current.play();
    else lottieRef.current.stop();
  }, [open]);
  return (
    <Container>
      <NotificationCopyLottie
        animationData={notificationCopy}
        lottieRef={lottieRef}
        loop={false}
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
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  margin-block-end: 20%;
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
