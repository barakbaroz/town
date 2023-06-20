import { useCallback } from "react";
import axios from "axios";
import { Player as GistPlayer } from "@gistmed/gist-ui";
import styled from "styled-components";

function Player({
  videoUrl,
  userInfo,
  analytic,
  thumbnail,
  setTime,
  setShowFeedback,
}) {
  const onLocationUpdate = useCallback(
    (percentage, location) => {
      axios.post("/api/users/userVideoAction", {
        UserId: userInfo.id,
        type: analytic,
        data: { percentage, location },
      });
    },
    [analytic, userInfo.id]
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
        thumbnail={thumbnail}
        onLocationUpdate={onLocationUpdate}
        onPlayerPlaying={onPlayerPlaying}
      />
    </VideoContainer>
  );
}

export default Player;

const VideoContainer = styled.div`
  margin-inline: 20px;
`;
