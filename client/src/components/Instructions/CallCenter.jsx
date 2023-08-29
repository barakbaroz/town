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
        <Wrapper>
          <Phone href="tel:03-9377241">03-9377241</Phone>
          &nbsp;
          <Translator>Call-Center-Extension</Translator>
        </Wrapper>
        <Translator>Call-Center-Hours</Translator>
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
  font-size: 1.125rem;
  & > p {
    margin: 0;
  }
`;

const Title = styled.p`
  font-size: 1.125rem;
  font-weight: bold;
`;

const Phone = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Wrapper = styled.span`
  display: flex;
  flex-wrap: wrap;
`;
