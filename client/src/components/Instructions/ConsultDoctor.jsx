import styled from "styled-components";
import { Card, Icon, Title, TopSection } from "./Card.Style";
import { Translator } from "../Translation";
import doctor_consult from "../../assets/Icons/doctor_consult.svg";
import { Button } from "../general.style";

function ConsultDoctor() {
  return (
    <Card>
      <TopSection>
        <Title>
          <Translator>התייעצות עם הרופא/ה המטפל/ת</Translator>
        </Title>
        <Icon src={doctor_consult} alt="doctorConsult" />
      </TopSection>

      <Text>
        <Translator>
          עליך לפנות לרופא/ה מטפל/ת לצורך קבלת מרשם לחומרי ההכנה. במידה והינך
          נוטל תרופות לטיפול בסוכרת ו/או נוגדות קרישה, יש לעקוב אחר ההמלצות
          הפרטניות ולהביא לרופא/ה את הטופס להורדה המצורף כאן.
        </Translator>
      </Text>
      <Button>
        <Translator>טופס לרופא/ת משפחה</Translator>
      </Button>
    </Card>
  );
}

export default ConsultDoctor;

const Text = styled.p`
  margin: 0;
  margin-block-end: 1.125rem;
`;
