import styled from "styled-components";
import { Card, Icon, Title, TopSection } from "./Card.Style";
import { Translator } from "../Translation";
import doctorConsult from "../../assets/Icons/doctor_consult.svg";
import { buttonCSS } from "../general.style";
import { postAnalytics } from "../../analytics";

export default function ConsultDoctor() {
  const handleConsultClick = () => {
    postAnalytics({ type: "consult-doctor-clicked" });
  };

  return (
    <Card>
      <TopSection>
        <Title>
          <Translator>Consult-Doctor-Title</Translator>
        </Title>
        <Icon src={doctorConsult} alt="doctorConsult" />
      </TopSection>

      <Text>
        <Translator>Consult-Doctor-Paragraph</Translator>
      </Text>
      <StyledButton href="#" show={true} onClick={handleConsultClick}>
        <Translator>Consult-Doctor-Download</Translator>
      </StyledButton>
    </Card>
  );
}

const StyledButton = styled.a`
  ${buttonCSS}
  text-decoration: none;
  display: ${({ show }) => (show ? "block" : "none")};
`;

const Text = styled.p`
  margin: 0;
  margin-block-end: 2.188rem;
  font-size: 1.188rem;
`;
