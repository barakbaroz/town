import navigationArrow from "../../assets/Icons/navigation_arrow.svg";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function Navigation({ nextQuestionKey, index, questionsSize }) {
  const navigate = useNavigate();

  const handleNext = () => {
    if (nextQuestionKey) navigate(`../Questionnaire/${nextQuestionKey}`);
  };
  const handlePrev = () => {
    navigate(-1);
  };
  return (
    <Container>
      <ArrowIcon
        src={navigationArrow}
        alt="navigationArrow"
        onClick={handleNext}
        flip={true}
      />
      <h3
        style={{
          paddingInline: "20%",
          fontSize: "1.375rem",
          fontFamily: "Poppins",
          margin: "0",
        }}
      >
        {index + 1}
        <span style={{ marginInline: "0.4rem" }}>/</span>
        {questionsSize}
      </h3>
      <ArrowIcon
        src={navigationArrow}
        alt="navigationArrow"
        onClick={handlePrev}
        flip={false}
      />
    </Container>
  );
}

Navigation.propTypes = {
  maxQuestionIndex: PropTypes.number,
  index: PropTypes.number,
  questionsSize: PropTypes.number,
  nextQuestionKey: PropTypes.string,
};

export default Navigation;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-block: 16px;
  padding-inline: var(--screen-padding-inline);
`;

const ArrowIcon = styled.img`
  width: 0.8rem;
  ${({ flip }) =>
    flip &&
    css`
      transform: rotateY(180deg);
    `}
`;
