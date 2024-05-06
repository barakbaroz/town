import { useCallback } from "react";
import axios from "axios";
import { Player as GistPlayer } from "@gistmed/gist-ui";
import styled from "styled-components";
import { useUser } from "../../providers/UserProvider";
import useVideo from "../../hooks/useVideo";
import PropTypes from "prop-types";
import thumbnail from "../../assets/thumbnail.jpg";
import { useLanguage } from "../../providers/LanguageProvider";

function Player({ onPlayerPlaying, videoRef }) {
  const { Case, Questionnaires } = useUser();
  const { language } = useLanguage();

  const { video } = useVideo({ language, Case, Questionnaires });

  const onLocationUpdate = useCallback((percentage, location) => {
    axios.post("/api/user/userVideoAction", {
      type: "watched-video",
      data: { percentage, location },
    });
  }, []);

  return (
    <VideoContainer>
      <GistPlayer
        src={video.src}
        autoFullScreen={false}
        audioStartDelay={3}
        onLocationUpdate={onLocationUpdate}
        onPlayerPlaying={onPlayerPlaying}
        thumbnail={thumbnail}
        passedRef={videoRef}
      />
    </VideoContainer>
  );
}

export default Player;

Player.propTypes = {
  onPlayerPlaying: PropTypes.func,
  videoRef: PropTypes.oneOfType([
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    PropTypes.func,
  ]),
};

const VideoContainer = styled.div`
  margin-inline: 15px;
`;
