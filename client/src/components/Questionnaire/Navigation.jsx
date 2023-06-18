import navigationArrow from "../../assets/Icons/navigation_arrow.svg";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

function Navigation({ setIndex, maxQuestionIndex, index, questionsSize }) {
  const decreaseIndex = () => setIndex((prev) => Math.max(prev - 1, 0));
  const increaseIndex = () =>
    setIndex((prev) => Math.min(prev + 1, maxQuestionIndex));
  return (
    <Container>
      <ArrowIcon
        src={navigationArrow}
        alt="navigationArrow"
        onClick={decreaseIndex}
        flip={true}
      />
      <h3
        style={{
          paddingInline: "20%",
          fontSize: "1.375rem",
          fontFamily: "Poppins",
        }}
      >
        {index + 1}
        <span style={{ marginInline: "0.4rem" }}>/</span>
        {questionsSize}
      </h3>
      <ArrowIcon
        src={navigationArrow}
        alt="navigationArrow"
        onClick={increaseIndex}
        flip={false}
      />
    </Container>
  );
}

Navigation.propTypes = {
  setIndex: PropTypes.func,
  maxQuestionIndex: PropTypes.number,
  textIndicator: PropTypes.string,
};

export default Navigation;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  /* flex-wrap: wrap; */
  padding-block: 16px;
  /* padding-block-start: ; */
  padding-inline: var(--screen-padding-inline);
`;

const ArrowIcon = styled.img`
  width: 0.6rem;
  /* height: 50px; */
  ${({ flip }) =>
    flip &&
    css`
      transform: rotateY(180deg);
    `}
`;
