import PropTypes from "prop-types";
import { useMemo } from "react";
import styled from "styled-components";
import X_Icon from "../../assets/Icons/white_X.svg";
import useVideoUrl from "../../hooks/useVideoUrl";
import { Player as GistPlayer } from "@gistmed/gist-ui";
import videoThumbnail from "../../assets/videoThumbnail.png";

const PanelVideo = ({ close, item, show }) => {
  const params = useMemo(() => {
    const { Avatar, User } = item;
    const { language } = User;
    return {
      ...Avatar,
      language,
      hospital: "clalit",
    };
  }, [item]);

  const { videoUrl } = useVideoUrl(
    show ? params : null,
    "heart-failure-community"
  );

  if (!show) return <></>;

  return (
    <Modal>
      <Close src={X_Icon} onClick={close}></Close>
      <VideoWrapper>
        <GistPlayer
          src={videoUrl}
          audioStartDelay={3}
          thumbnail={videoThumbnail}
        />
      </VideoWrapper>
    </Modal>
  );
};

PanelVideo.propTypes = {
  close: PropTypes.func,
  item: PropTypes.object,
  show: PropTypes.bool,
};

export default PanelVideo;

const Modal = styled.div`
  position: fixed;
  display: flex;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

const VideoWrapper = styled.div`
  width: 60%;
`;

const Close = styled.img`
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
  z-index: 1;
  color: white;
  left: 44px;
  top: 40px;
  position: absolute;
`;
