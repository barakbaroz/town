import PropTypes from "prop-types";
import styled from "styled-components";
import PhoneInput from "./PhoneInput";
import PlayIcon from "../../assets/Icons/gist_play.svg";
import CopyLinkIcon from "../../assets/Icons/copy_link.svg";
import PanelVideo from "../Video/PanelVideo";
import { useState } from "react";

function CaseItemButtons({ item }) {
  const [linkCopied, setLinkCopied] = useState(false);
  const [videoType, setVideoType] = useState(null);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(
      `${window.location.origin}/user/${item.User.id}/Start`
    );
    setLinkCopied(true);
  };

  return (
    <ButtonsColumn>
      <PanelVideo
        close={() => setVideoType(null)}
        item={item}
        videoType={videoType}
      />

      <ButtonContainer>
        <Button disabled={!item.age || !item.gender}>
          <img src={PlayIcon} />
        </Button>
        <ActionText>נגן סרטון</ActionText>
      </ButtonContainer>

      <ButtonContainer>
        <Button onClick={handleCopyLink}>
          <img src={CopyLinkIcon} />
        </Button>
        <ActionText>{linkCopied ? "לינק הועתק" : "העתקת לינק"}</ActionText>
      </ButtonContainer>

      <ButtonContainer>
        <PhoneInput item={item} />
      </ButtonContainer>
    </ButtonsColumn>
  );
}

export default CaseItemButtons;

CaseItemButtons.propTypes = {
  item: PropTypes.object,
};

const Column = styled.div`
  text-align: start;
  display: flex;
  flex-direction: column;
  width: 29%;
  height: 98%;
  margin: 2rem 0;
`;

const ButtonsColumn = styled(Column)`
  width: 10%;
  justify-content: space-around;
  gap: 1.5rem;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f02a4c;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
`;

const ActionText = styled.div`
  color: #f02a4c;
  font-family: inherit;
  font-size: 0.8rem;
  font-weight: 600;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  &:hover > ${Button} {
    background-color: #bf213c;
  }
  &:hover > ${ActionText} {
    color: #bf213c;
  }
`;
