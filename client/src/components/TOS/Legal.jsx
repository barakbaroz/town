import { postAnalytics } from "../../analytics";
import Wrapper from "./Wrapper";
import LegalText from "./LegalText";
import Transition from "../../Transition";

function Legal() {
  const BackClick = () => {
    postAnalytics({ type: "Legal-Back-clicked" });
  };

  return (
    <Transition>
      <Wrapper onBack={BackClick} id="LegalWrapper">
        <LegalText />
      </Wrapper>
    </Transition>
  );
}

export default Legal;
