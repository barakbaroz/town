import postAnalytics from "../../utilities/postAnalytics";
import Wrapper from "./Wrapper";
import LegalText from "./LegalText";
import { useContext } from "react";
import { userContext } from "../../providers/UserProvider";

function Legal() {
  const { id: userId } = useContext(userContext);

  const BackClick = () => {
    postAnalytics({ userId, type: "Legal-Back" });
  };

  return (
    <Wrapper onBack={BackClick}>
      <LegalText />
    </Wrapper>
  );
}

export default Legal;
