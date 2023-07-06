import PropTypes from "prop-types";
import styled from "styled-components";
import trashIcon from "../../assets/Icons/trash_pop_icon.svg";

const DeletePopup = ({ close, deleteCase, show }) => {
  const handleDeleteClick = () => {
    deleteCase();
    close();
  };

  return (
    <Backdrop show={show}>
      <Container id="deletePopUpContent">
        <img alt="alert" src={trashIcon} />
        <Text>האם את/ה בטוח/ה שברצונך למחוק את המקרה?</Text>
        <ActionButtons>
          <Button onClick={handleDeleteClick}>אישור</Button>
          <Button onClick={close}>ביטול</Button>
        </ActionButtons>
      </Container>
    </Backdrop>
  );
};

DeletePopup.propTypes = {
  close: PropTypes.func,
  deleteCase: PropTypes.func,
  show: PropTypes.bool,
};

export default DeletePopup;

const Backdrop = styled.div`
  position: fixed;
  z-index: 2;
  inset: 0;
  background-color: #000000b3;
  align-items: center;
  justify-content: center;
  display: ${({ show }) => (show ? "flex" : "none")};
`;

const Container = styled.div`
  font-family: "Assistant";
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  background: #fff;
  padding: 100px;
  border-radius: 20px;
`;

const Text = styled.div`
  font-family: inherit;
  font-size: 1.3rem;
  font-weight: bold;
  color: #2a2a2a;
`;
const Button = styled.button`
  font-family: inherit;
  background-color: white;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 40px;
  padding: 0.5rem 2rem;
  color: #f02a4c;
  border: 2px solid #f02a4c;
  &:hover {
    background-color: #f02a4c;
    color: white;
  }
`;
const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;
