import Lottie from "lottie-react";
import PropTypes from "prop-types";
import notificationCopy from "../../assets/Lotties/notificationCopy.json";
import PopUp from "../Popups/PopUp";
import styled from "styled-components";

export default function DuplicatePopUp({ onConfirm, onCancel, open, loading }) {
  return (
    <PopUp isPreviewOpen={open}>
      <Container>
        <Megaphone />

        <TextWrapper>
          <Text>
            A duplicate case associated with the same phone number <br /> has
            been identified in the system.
          </Text>
          <Text style={{ fontWeight: "Bold" }}>
            Are you sure you want to resend the video?
          </Text>
        </TextWrapper>

        <ActionButtons>
          <AcceptButton disabled={loading} onClick={onConfirm}>
            Send
          </AcceptButton>
          <CancelButton disabled={loading} onClick={onCancel}>
            Cancel
          </CancelButton>
        </ActionButtons>
      </Container>
    </PopUp>
  );
}

DuplicatePopUp.propTypes = {
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  open: PropTypes.bool,
  loading: PropTypes.bool,
};

const Container = styled.div`
  font-family: "Assistant";
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block-end: 92px;
  padding-block-start: 49px;
  padding-inline: 165px;
`;

const Text = styled.p`
  padding: 0;
  margin: 0;
  font-family: inherit;
  font-size: 1.25rem;
  text-align: center;
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 23px;
`;

const Button = styled.button`
  background-color: white;
  font-family: inherit;
  font-size: 1.125rem;
  cursor: pointer;
  border-radius: 40px;
  padding-block: 0.5rem;
  padding-inline: 3rem;
  transition: all 200ms linear;
  &:disabled {
    opacity: 0.5;
    cursor: wait;
  }
`;

const AcceptButton = styled(Button)`
  border: 1px solid #84a4fc;
  color: #84a4fc;
  &:hover {
    background-color: #84a4fc;
    color: white;
  }
`;

const CancelButton = styled(Button)`
  border: 1px solid #f02a4c;
  color: #f02a4c;
  &:hover {
    background-color: #f02a4c;
    color: white;
  }
`;
const Megaphone = styled(Lottie).attrs({ animationData: notificationCopy })`
  height: 229px;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-block-end: 49px;
`;
