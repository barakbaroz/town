import styled from "styled-components";
import { Card } from "../../stylings/VideoPageStyling";
import { Translator } from "../Translation";

function Consent() {
  return (
    <Card>
      <TopSection>
        <Title>
          <Translator>ביום הבדיקה לא לשכוח להביא</Translator>
        </Title>
        <img src="" alt="image" />
      </TopSection>

      <Text>
        <Translator>
          עליך לפנות לרופא/ה מטפל/ת לצורך קבלת מרשם לחומרי ההכנה. במידה והינך
          נוטל תרופות לטיפול בסוכרת ו/או נוגדות קרישה, יש לעקוב אחר ההמלצות
          הפרטניות ולהביא לרופא/ה את הטופס להורדה המצורף כאן.
        </Translator>
      </Text>

      <DoctorFormDownload>
        <Translator>טופס הסכמה מדעת להורדה</Translator>
      </DoctorFormDownload>
    </Card>
  );
}

export default Consent;

const TopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block-start: 1.25rem;
  padding-block-end: 0.734rem;
`;
const Title = styled.h1`
  margin: 0;
  font-size: 1.375rem;
`;

const Text = styled.p`
  margin: 0;
  margin-block-end: 1.125rem;
`;

const DoctorFormDownload = styled.button`
  --content-height: 1.625rem;
  font-size: 1.125rem;
  cursor: pointer;
  color: #ffffff;
  background-color: #f02a4c;
  border: none;
  padding-block: 0.688rem;
  padding-inline: 27px;
  border-radius: 50px;
  align-self: center;
  font-family: inherit;
`;
