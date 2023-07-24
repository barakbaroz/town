import { postAnalytics } from "../../analytics";
import Wrapper from "./Wrapper";
import LegalText from "./LegalText";

function Legal() {
  const BackClick = () => {
    postAnalytics({ type: "Legal-Back-clicked" });
  };

  return (
    <Wrapper onBack={BackClick}>
      <LegalText />
    </Wrapper>
  );
}

export default Legal;
