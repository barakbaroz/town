import { useContext } from "react";
import { RWebShare } from "react-web-share";
import IconButton from "../User/IconButton";
import ShareIcon from "../../assets/Icons/share.svg";
import { userContext } from "../../providers/UserProvider";
import { Translate } from "../Translation";
import postAnalytics from "../../utilities/postAnalytics";

function VideoButtons() {
  const { id: userId } = useContext(userContext);

  return (
    <IconButton
      id="Share-iconButton"
      label="share"
      onClick={() => postAnalytics({ userId, type: "share-video" })}
    >
      <RWebShare
        data={{
          text: Translate("Share-Video-Text"),
          url: window.location.href,
          title: Translate("Ichiliov-Name"),
        }}
      >
        <img id="ShareButton" src={ShareIcon} alt="Share" />
      </RWebShare>
    </IconButton>
  );
}

export default VideoButtons;
