import { useCallback } from "react";
import axios from "axios";
import { Player as GistPlayer } from "@gistmed/gist-ui";
import styled from "styled-components";
import { useUser } from "../../providers/UserProvider";
import { useMemo } from "react";
import useVideoUrl from "../../hooks/useVideoUrl";
import PropTypes from "prop-types";
import videoThumbnail from "../../assets/videoThumbnail.jpg";
import { useLanguage } from "../../providers/LanguageProvider";

function Player({ setShowFeedback, videoRef }) {
  const userInfo = useUser();
  const { language } = useLanguage();
  const params = useMemo(() => {
    const { Case, Questionnaires } = userInfo;
    const { Avatar, procedureTime, procedureDate, concentrate } = Case;
    const questionnaire = Questionnaires.filter(
      ({ answerKey }) => answerKey === "Yes"
    ).map(({ questionKey }) => questionKey);

    return {
      ...Avatar,
      language,
      procedureTime,
      procedureDate,
      concentrate,
      questionnaire,
      hospital: "yoseftal",
    };
  }, [language, userInfo]);

  const { videoUrl } = useVideoUrl(params);

  const onLocationUpdate = useCallback((percentage, location) => {
    axios.post("/api/user/userVideoAction", {
      type: "watched-video",
      data: { percentage, location },
    });
  }, []);

  const onPlayerPlaying = useCallback(() => {
    setShowFeedback(true);
  }, [setShowFeedback]);

  return (
    <VideoContainer>
      <GistPlayer
        src={videoUrl}
        autoFullScreen={false}
        audioStartDelay={3}
        onLocationUpdate={onLocationUpdate}
        onPlayerPlaying={onPlayerPlaying}
        thumbnail={videoThumbnail}
        passedRef={videoRef}
      />
    </VideoContainer>
  );
}

export default Player;

Player.propTypes = {
  setShowFeedback: PropTypes.func,
  videoRef: PropTypes.node,
};

const VideoContainer = styled.div`
  margin-inline: 15px;
`;
