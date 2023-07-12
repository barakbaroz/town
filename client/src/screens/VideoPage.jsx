import styled from "styled-components";
import Player from "../components/Video/Player";
import { useState, Fragment } from "react";
import VideoButtons from "../components/Instructions/VideoButtons";
import SatisfactionQuestions from "../components/Instructions/SatisfactionQuestions";
import LanguageBar from "../components/User/LanguageBar";
import medicationsIcon from "../assets/Icons/drugs.png";
import dietIcon from "../assets/Icons/diet.png";
import activityIcon from "../assets/Icons/activity.png";
import background from "../assets/Backgrounds/wave_background.svg";

function VideoPage() {
  const [showFeedback, setShowFeedback] = useState(false);

  return (
    <Container>
      <ContentWrapper>
        <LanguageBar />
        <Title>
          אי ספיקת לב הינה מחלה המחייבת מעקב, היענות לטיפול וניהול אורח חיים
          נכון. צפה בסרטון כדי לדעת עוד
        </Title>
      </ContentWrapper>
      <Player setShowFeedback={setShowFeedback} />
      <ContentWrapper>
        <ShareWrapper>
          <VideoButtons />
        </ShareWrapper>
        <SatisfactionQuestions videoStarted={showFeedback} />
        <InstructionsTitle>
          חשוב לזכור לנהל שגרת חיים נכונה כחלק מהטיפול שלך
        </InstructionsTitle>
        {Object.values(routinesInstructions).map(
          ({ icon, paragraph }, index) => (
            <Fragment key={index}>
              <RoutineWrapper>
                <img src={icon} alt={icon} />
                <RoutineText>{paragraph}</RoutineText>
              </RoutineWrapper>
              <Divider />
            </Fragment>
          )
        )}
      </ContentWrapper>
      <Footer>מטופל מעורב הוא מטופל שמחלים טוב יותר</Footer>
    </Container>
  );
}

export default VideoPage;

const routinesInstructions = {
  medications: {
    icon: medicationsIcon,
    paragraph:
      "ליטול את התרופות שניתנו לך בדיוק לפי המרשם, ולקחת אותן בזמן - במרווחים קבועים",
  },
  diet: {
    icon: dietIcon,
    paragraph:
      "תזונה בריאה דלת מלח הכוללת דגנים מלאים, פירות, ירקות ומאכלים דלי שומן, חיונית לאורח חיים מאוזן והאטת התקדמות המחלה",
  },
  activity: {
    icon: activityIcon,
    paragraph:
      "מומלץ לשלב בשגרת היומיום שלך פעילות גופנית כמו הליכה, שתשפר גם את הכושר הגופני וגם את ההרגשה הכללית ובעיקר - תחזק את שרירי הלב.",
  },
};

const Container = styled.div`
  background-image: url(${background});
  background-size: cover;
  padding-block-end: 57px;
`;

const ContentWrapper = styled.div`
  padding-inline: 25px;
`;

const Title = styled.p`
  text-align: start;
  font-size: 1.375rem;
  font-weight: 500;
  margin-block-start: 2.125rem;
  margin-block-end: 1.813rem;
`;

const ShareWrapper = styled.div`
  justify-content: end;
  margin-block-start: 1.125rem;
`;

const Divider = styled.div`
  height: 1px;
  border-radius: 2px;
  background-color: #84a4fb;
  margin-block-end: 35px;
  margin-block-start: 35px;
  opacity: 0.3;
`;

const InstructionsTitle = styled.p`
  text-align: start;
  font-size: 1.375rem;
  font-weight: 700;
  margin-block-start: 4.063rem;
  margin-block-end: 2.25rem;
`;

const RoutineWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
`;

const RoutineText = styled.p`
  text-align: start;
  font-size: 1.188rem;
  font-weight: 400;
  margin-block: 0;
`;

const Footer = styled.footer`
  font-weight: 500;
  text-align: center;
  font-size: 1.5rem;
  padding-inline: 44px;
`;
