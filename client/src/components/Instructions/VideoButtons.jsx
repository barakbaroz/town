import { RWebShare } from "react-web-share";
import IconButton from "../User/IconButton";
import ShareIcon from "../../assets/Icons/share.svg";
import { Translate } from "../Translation";
import postAnalytics from "../../postAnalytics";

function VideoButtons() {
  return (
    <IconButton
      id="Share-iconButton"
      label="share"
      onClick={() => postAnalytics({ type: "share-video" })}
    >
      <RWebShare
        data={{
          text: Translate("Share-Video-Text"),
          url: window.location.href,
          title: Translate("Hospital-Name"),
        }}
      >
        <img id="ShareButton" src={ShareIcon} alt="Share" />
      </RWebShare>
    </IconButton>
  );
}

export default VideoButtons;
