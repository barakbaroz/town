import { useCallback } from "react";
import axios from "axios";
import { Player as GistPlayer } from "@gistmed/gist-ui";
import styled from "styled-components";
import { useContext } from "react";
import { userContext } from "../../providers/UserProvider";
import { LanguageContext } from "../Translation";
import { useMemo } from "react";
import useVideoUrl from "../../hooks/useVideoUrl";
import PropTypes from "prop-types";
import videoThumbnail from "../../assets/videoThumbnail.png";

function Player({ setShowFeedback, videoRef }) {
  const userInfo = useContext(userContext);
  const { language } = useContext(LanguageContext);
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
      hospital: "belinson",
    };
  }, [language, userInfo]);

  const { videoUrl } = useVideoUrl(params, "colonoscopy-preperation");

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
