import PropTypes from "prop-types";
import styled from "styled-components";
import X_Icon from "../../assets/Icons/white_X.svg";
import useVideo from "../../hooks/useVideo";
import { Player as GistPlayer } from "@gistmed/gist-ui";
import thumbnail from "../../assets/thumbnail.jpg";

export default function PanelVideo({ close, item, show }) {
  const { video } = useVideo({
    language: item.User.language,
    Case: item,
    Questionnaires: item.User.Questionnaires,
  });

  if (!show) return <></>;

  return (
    <Modal>
      <Close src={X_Icon} onClick={close}></Close>
      <VideoWrapper>
        <GistPlayer src={video.src} audioStartDelay={3} thumbnail={thumbnail} />
      </VideoWrapper>
    </Modal>
  );
}

PanelVideo.propTypes = {
  close: PropTypes.func,
  item: PropTypes.object,
  show: PropTypes.bool,
};

const Modal = styled.div`
  position: fixed;
  display: flex;
  inset: 0;
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
  right: 44px;
  top: 40px;
  position: absolute;
`;
