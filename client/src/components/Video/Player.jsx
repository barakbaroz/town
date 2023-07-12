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

function Player({ setShowFeedback }) {
  const userInfo = useContext(userContext);
  const { language } = useContext(LanguageContext);

  const params = useMemo(() => {
    const { age, gender, ethnicity } = userInfo.Case;
    const backgroundDisease = userInfo.Questionnaires.map(
      ({ questionKey }) => questionKey
    );
    return {
      gender,
      age,
      language,
      ethnicity,
      hospital: "ichilov",
      backgroundDisease,
    };
  }, [language, userInfo]);

  const { videoUrl } = useVideoUrl(params, "pediatric-pre-anesthesia");

  const onLocationUpdate = useCallback(
    (percentage, location) => {
      axios.post("/api/users/userVideoAction", {
        UserId: userInfo.id,
        type: "watched-video",
        data: { percentage, location },
      });
    },
    [userInfo.id]
  );

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
      />
    </VideoContainer>
  );
}

export default Player;

Player.propTypes = {
  setShowFeedback: PropTypes.func,
};

const VideoContainer = styled.div`
  margin-inline: 15px;
`;
