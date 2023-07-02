import postAnalytics from "../../utilities/postAnalytics";
import Wrapper from "./Wrapper";
import PrivacyText from "./PrivacyText";
import { useContext } from "react";
import { userContext } from "../../providers/UserProvider";

function Privacy() {
  const { id: userId } = useContext(userContext);

  const BackClick = () => {
    postAnalytics({ userId, type: "Privacy-Back" });
  };

  return (
    <Wrapper onBack={BackClick}>
      <PrivacyText />
    </Wrapper>
  );
}

export default Privacy;
