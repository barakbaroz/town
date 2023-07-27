import styled from "styled-components";
import phoneIcon from "../../assets/Icons/phone_icon.svg";
import { Translator } from "../Translation";

function CallCenter() {
  return (
    <Container>
      <TextContent>
        <Title>
          <Translator>מזכירות בילינסון</Translator>
        </Title>

        <Text>
          <Translator>03-9377241 שלוחה 8</Translator>
        </Text>
        <Text>
          <Translator>בין השעות: 10:00-14:00</Translator>
        </Text>
      </TextContent>
      <PhoneImage src={phoneIcon} alt="phoneIcon" />
    </Container>
  );
}

export default CallCenter;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #84a4fc;
  margin-inline: 23px;
  border-radius: 20px;
  padding-block-start: 1.188rem;
  padding-block-end: 1.375rem;
`;

const PhoneImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: #84a4fc;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  color: #fff;
`;

const Title = styled.p`
  margin: 0;
  font-size: 1.125rem;
  font-weight: bold;
`;

const Text = styled.p`
  margin: 0;
  font-size: 1.125rem;
`;
