import { RWebShare } from "react-web-share";
import ShareIcon from "../../assets/Icons/share.svg";
import { Translate, Translator } from "../Translation";
import { postAnalytics } from "../../analytics";
import styled from "styled-components";

export default function Share(props) {
  const handleAnalytic = () => postAnalytics({ type: "video-share" });

  return (
    <Container onClick={handleAnalytic} {...props}>
      <Label>
        <Translator>Share</Translator>
      </Label>
      <RWebShare
        data={{
          text: Translate("Share-Text"),
          url: window.location.href,
          title: Translate("Share-Title"),
        }}
      >
        <img id="ShareButton" src={ShareIcon} alt="Share" />
      </RWebShare>
    </Container>
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
