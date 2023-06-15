import styled from "styled-components";
import { Translator } from "../components/Translation";
import Player from "../components/Video/Player";
import { useContext, useState } from "react";
import { userContext } from "../providers/UserProvider";
import VideoButtons from "../components/Instructions/VideoButtons";
import Feedback from "../components/Instructions/Feedback";
import SurgeryInstructions from "../components/Instructions/SurgeryInstructions";
import DontForget from "../components/Instructions/DontForget";
import Consent from "../components/Instructions/Consent";

function Instructions() {
  const userInfo = useContext(userContext);
  const videoUrl = "";
  // To change the state to false.
  const [showFeedback, setShowFeedback] = useState(true);

  return (
    <Container>
      <VideoPreviewTexts>
        <Title>
          <Translator>הסרטון הבא הותאם במיוחד עבור ילדכם</Translator>
        </Title>

        <Text>
          <Translator>
            לאחר הצפיה בסרטון, יש לקרוא ולאשר את ההנחיות לקראת הניתוח המצורפות
            בהמשך המסך
          </Translator>
        </Text>
      </VideoPreviewTexts>

      <VideoWrapper id="VideoWrapper">
        <Player
          videoUrl={videoUrl}
          userInfo={userInfo}
          analytic="watched-video"
          //   thumbnail={sugarThumbnails[userInfo.Case.avatar]}
          setShowFeedback={setShowFeedback}
        />
        <ShareWrapper>
          <VideoButtons type="test" />
        </ShareWrapper>
        <Feedback type="post" show={showFeedback} />
      </VideoWrapper>

      <SurgeryInstructions />
      <DontForget />
      <Consent />
      <Footer>
        <Translator>Footer</Translator>
      </Footer>
    </Container>
  );
}

export default Instructions;

const Container = styled.div`
  --screen-texts-padding: 27px;
  padding-block: 20px;
`;

const VideoPreviewTexts = styled.div`
  margin-inline: var(--screen-texts-padding);
`;

const Title = styled.h1`
  font-size: 1.625rem;
  font-weight: 500;
`;

const Text = styled.h3`
  font-weight: 400;
  font-size: 1.125rem;
`;

const VideoWrapper = styled.div`
  /* margin: 1.5rem 0 4rem 0;
  padding-block-end: 1rem; */
`;

const ShareWrapper = styled.div`
  text-align: start;
  display: flex;
  justify-content: flex-end;
  margin: 1rem 0 0 0;
  gap: 1.2rem;
  margin-inline: var(--screen-texts-padding);
`;

const Footer = styled.footer`
  text-align: center;
  color: #444444;
  font-size: 1.5rem;
  padding-inline: 1.2rem;
`;
