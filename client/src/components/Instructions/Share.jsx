import { RWebShare } from "react-web-share";
import IconButton from "./IconButton";
import ShareIcon from "../../assets/Icons/share.svg";
import { useUser } from "../../providers/UserProvider";
import { Translate } from "../Translation";
import { postAnalytics } from "../../analytics";

function Share() {
  const { id: userId } = useUser();
  const handleAnalytic = () => {
    postAnalytics({ userId, type: "VideoShare" });
  };

  return (
    <IconButton id="Share-iconButton" label="Share" onClick={handleAnalytic}>
      <RWebShare
        data={{
          text: Translate("Share-Text"),
          url: window.location.href,
          title: Translate("Share-Title"),
        }}
      >
        <img id="ShareButton" src={ShareIcon} alt="Share" />
      </RWebShare>
    </IconButton>
  );
}

export default Share;
