import Lottie from "lottie-react";
import PropTypes from "prop-types";
import notificationCopy from "../../assets/Lotties/notificationCopy.json";

import styled from "styled-components";

function DuplicatePopUp({ onConfirm, onCancel, open, loading }) {
  return (
    <Backdrop open={open}>
      <Container>
        <NotificationCopyLottie animationData={notificationCopy} loop={false} />

        <TextContainer>
          <Text>קיים מקרה עם טלפון זהה במערכת.</Text>
          <Text>האם לשלוח שוב את הסרטון שוב?</Text>
        </TextContainer>

        <ActionButtons>
          <AcceptButton disabled={loading} onClick={onConfirm}>
            אישור
          </AcceptButton>
          <CancelButton disabled={loading} onClick={onCancel}>
            ביטול
          </CancelButton>
        </ActionButtons>
      </Container>
    </Backdrop>
  );
}

DuplicatePopUp.propTypes = {
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  open: PropTypes.bool,
  loading: PropTypes.bool,
};

export default DuplicatePopUp;

const NotificationCopyLottie = styled(Lottie)`
  width: 200px;
`;

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: #000000b3;
  align-items: center;
  justify-content: center;
  display: ${({ open }) => (open ? "flex" : "none")};
  z-index: 3;
`;

const Container = styled.div`
  font-family: "Assistant";
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding-inline: 151px;
  padding-block-end: 99px;
  padding-block-start: 59px;
  border-radius: 20px;
`;

const TextContainer = styled.div`
  padding-block-end: 57px;
  padding-block-start: 9px;
`;

const Text = styled.p`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.313rem;
`;

const Button = styled.button`
  background-color: white;
  font-family: inherit;
  font-size: 1.125rem;
  cursor: pointer;
  border-radius: 40px;
  padding-block: 10px;
  padding-inline: 53px;
  transition: all 200ms linear;
  &:disabled {
    opacity: 0.5;
    cursor: wait;
  }
`;

const AcceptButton = styled(Button)`
  border: 1px solid #84a4fb;
  color: #84a4fb;
  &:hover {
    background-color: #84a4fb;
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
