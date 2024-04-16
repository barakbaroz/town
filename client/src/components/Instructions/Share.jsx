import { RWebShare } from "react-web-share";
import ShareIcon from "../../assets/Icons/share.svg";
import { Translate, Translator } from "../Translation";
import { postAnalytics } from "../../analytics";
import styled from "styled-components";
import { useUser } from "../../providers/UserProvider";

export default function Share() {
  const user = useUser();
  const handleAnalytic = () => {
    postAnalytics({ type: "video-share" });
  };

  return (
    <RWebShare
      onClick={handleAnalytic}
      data={{
        text: Translate("Share-Text"),
        url: `${window.location.origin}/api/user/entry/${user.id}`,
        title: Translate("Share-Title"),
      }}
    >
      <Container>
        <Label>
          <Translator>Share</Translator>
        </Label>
        <img id="ShareButton" src={ShareIcon} alt="Share" />
      </Container>
    </RWebShare>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.4rem;
`;

const Label = styled.p`
  color: #f02a4c;
  font-size: 0.875rem;
  margin: 0rem;
`;
