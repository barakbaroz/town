import styled from "styled-components";
import contactPhone from "../../assets/Icons/contact_phone.svg";
import { Translator } from "../Translation";

function CallCenter() {
  return (
    <Container>
      <TextContent>
        <Title>
          <Translator>Call-Center-Belinson</Translator>
        </Title>

        <Text>
          <Translator>Call-Center-Details</Translator>
        </Text>
        <Text>
          <Translator>Call-Center-Hours</Translator>
        </Text>
      </TextContent>
      <PhoneImage src={contactPhone} alt="phoneIcon" />
    </Container>
  );
}

export default CallCenter;

const Container = styled.div`
  color: #000;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-inline: 23px;
  padding-block-start: 1.188rem;
  padding-block-end: 1.375rem;
`;

const PhoneImage = styled.img``;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
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
