import PropTypes from "prop-types";
import styled from "styled-components";
import trashIcon from "../../assets/Icons/trash_pop_icon.svg";

const DeletePopup = ({ close, deleteCase }) => {
  const handleDeleteClick = () => {
    deleteCase();
    close();
  };

  return (
    <Container id="deletePopUpContent">
      <img alt="alert" src={trashIcon} />
      <Text>האם את/ה בטוח/ה שברצונך למחוק את המקרה?</Text>
      <ActionButtons>
        <AcceptButton onClick={handleDeleteClick}>אישור</AcceptButton>
        <CancelButton onClick={close}>ביטול</CancelButton>
      </ActionButtons>
    </Container>
  );
};

DeletePopup.propTypes = {
  close: PropTypes.func,
  deleteCase: PropTypes.func,
  show: PropTypes.bool,
};

export default DeletePopup;

const Container = styled.div`
  font-family: "Assistant";
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: 140px;
  padding-block: 136px;
`;

const Text = styled.div`
  font-family: inherit;
  font-size: 1.3rem;
  margin-block-start: 59px;
  margin-block-end: 49px;
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

const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 23px;
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
