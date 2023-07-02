import PropTypes from "prop-types";
import { useMemo } from "react";
import styled from "styled-components";
import X_Icon from "../../assets/Icons/black_X.svg";
import useVideoUrl from "../../hooks/useVideoUrl";
import { Player as GistPlayer } from "@gistmed/gist-ui";
import videoThumbnail from "../../assets/videoThumbnail.png";

const PanelVideo = ({ close, item, show }) => {
  const params = useMemo(() => {
    return {};
  }, []);

  const { videoUrl } = useVideoUrl(params, "");

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
  inset: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
`;

const VideoWrapper = styled.div`
  width: 60%;
  pointer-events: all;
  position: fixed;
  top: 15%;
  right: 20%;
`;
const Close = styled.img`
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
  z-index: 1;
  color: white;
  left: 40px;
  top: 20px;
  position: absolute;
`;
