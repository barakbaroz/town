import styled from "styled-components";
import backPageIcon from "../../assets/Icons/backPageIcon.svg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function BackButton({ text }) {
  return (
    <Wrapper dir="rtl">
      <Link to={-1}>
        <img src={backPageIcon} alt="return" />
      </Link>
      <Text>{text}</Text>
    </Wrapper>
  );
}
BackButton.propTypes = {
  text: PropTypes.string,
};
export default BackButton;
const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  gap: 4%;
  align-items: center;
`;
const Text = styled.p`
  font-size: 1.5rem;
  font-family: abraham, regular;
  font-weight: bold;
  padding-block-end: 0.25rem;
`;
