import { useContext } from "react";
import { RWebShare } from "react-web-share";
import IconButton from "../User/IconButton";
import ShareIcon from "../../assets/Icons/share.svg";
import axios from "axios";
import { userContext } from "../../providers/UserProvider";
import { Translate } from "../Translation";

function VideoButtons({ type }) {
  const { id: userId } = useContext(userContext);
  const handleAnalytic = () => {
    axios.post("/api/users/userAction", {
      userId,
      type: `share-${type}-Video`,
    });
  };

  return (
    <IconButton id="Share-iconButton" label="share" onClick={handleAnalytic}>
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
