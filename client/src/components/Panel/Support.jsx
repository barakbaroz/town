import { useState } from "react";
import styled from "styled-components";
import TechHelp from "../../assets/Panel/tech_help.svg";
import SmallX from "../../assets/Icons/GreyX.svg";
import SmallPlus from "../../assets/Icons/smallPlus.svg";
import SendIcon from "../../assets/Icons/send.svg";
import WhatsappIcon from "../../assets/Icons/whatstapp.svg";
import waveBackground from "../../assets/Backgrounds/wave_background.svg";

const Support = () => {
  const [body, setBody] = useState("");
  const [phone, setPhone] = useState("");
  const [expand, setExapnd] = useState(false);

  const handleExpand = () => {
    setExapnd((prev) => !prev);
  };

  const handleSubmit = () => {
    setExapnd(false);
  };

  return (
    <Conatiner expand={expand}>
      <Header onClick={handleExpand}>
        <Avatar src={TechHelp} />
        <Title>Need Help?</Title>
        <Icon src={expand ? SmallX : SmallPlus} />
      </Header>
      <SubContainer expand={expand}>
        <InputsContainer>
          <Body
            placeholder="We'll be happy to assist you"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          />
          <Phone
            placeholder="Mobile Number"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            value={phone}
            maxLength="10"
          />
        </InputsContainer>
        <SubmitSection>
          <PhoneWrapper>
            <img src={WhatsappIcon} style={{ width: "2rem" }} />
            <PhoneLabel>052-3394834</PhoneLabel>
          </PhoneWrapper>
          <SubmitButton onClick={handleSubmit}>
            <SubmitLabel>Send</SubmitLabel>
            <img src={SendIcon} />
          </SubmitButton>
        </SubmitSection>
      </SubContainer>
    </Conatiner>
  );
};

export default Support;

const Conatiner = styled.div`
  height: ${({ expand }) => (expand ? "34%" : "4%")};
  transition: all 800ms ease;
  width: 80%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  position: relative;
  padding: 2%;
  cursor: pointer;
  background-image: url(${waveBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-block-end: 10px;
`;

const PhoneWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Header = styled.div`
  z-index: 1;
  display: flex;
  position: relative;
`;

const Avatar = styled.img`
  height: 80px;
  z-index: 2;
  margin: -19% 5% 0 0;
`;

const Title = styled.div`
  font-family: "Assistant";
  font-weight: 600;
  font-size: 16px;
  margin: auto 6% auto 6%;
  white-space: nowrap;
`;

const SubContainer = styled.div`
  padding: 3%;
  margin-top: 4%;
  overflow: hidden;
`;

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
const Body = styled.textarea`
  border: 1px solid #ffffff;
  border-radius: 10px;
  font-family: "Assistant";
  color: black;
  resize: none;
  font-weight: 600;
  font-size: 14px;
  ::-webkit-input-placeholder {
    padding: 0% 3% 0 0;
  }
  padding: 1rem;
  height: 120px;
  width: 100%;
  outline: none;
  box-sizing: border-box;
`;

const Phone = styled.input`
  border: 1px solid #ffffff;
  border-radius: 10px;
  font-family: "Assistant";
  color: black;
  ::-webkit-input-placeholder {
    padding: 0% 3% 0 0;
  }
  padding: 0.5rem 1rem;
  resize: none;
  font-weight: 600;
  outline: none;
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;
`;

const Icon = styled.img`
  position: absolute;
  right: 3%;
  top: 32%;
  cursor: pointer;
`;

const SubmitSection = styled.div`
  display: flex;
  margin-top: 1.5rem;
  justify-content: space-between;
  align-items: center;
`;

const PhoneLabel = styled.p`
  font-family: "Assistant";
  font-weight: 400;
  font-size: 15px;
  margin: auto 4% auto 6%;
  white-space: nowrap;
`;

const SubmitButton = styled.div`
  background: #f02a4c;
  display: flex;
  border-radius: 17px;
  &:hover {
    transform: scale(1.1);
  }
  cursor: pointer;
  padding: 2% 10% 2% 10%;
  box-shadow: 0px 3px 6px #00000029;
`;
const SubmitLabel = styled.p`
  font-family: "Assistant";
  font-weight: 600;
  font-size: 14px;
  margin: auto 4% auto 8%;
  color: #ffffff;
  white-space: nowrap;
`;
