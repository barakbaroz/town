import postAnalytics from "../../postAnalytics";
import Wrapper from "./Wrapper";
import PrivacyText from "./PrivacyText";

function Privacy() {
  const BackClick = () => {
    postAnalytics({ type: "Privacy-Back-clicked" });
  };

  return (
    <Wrapper onBack={BackClick}>
      <PrivacyText />
    </Wrapper>
  );
}

export default Privacy;
