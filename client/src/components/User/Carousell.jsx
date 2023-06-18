import { useEffect, useRef } from "react";
import styled from "styled-components";
import lodash from "lodash";
import PropTypes from "prop-types";

function Carousell({ children, index, setIndex }) {
  const pagesHolderRef = useRef(null);
  const refArray = useRef([]);

  const handleScroll = lodash.debounce(() => {
    const y = refArray.current[index];
    const newPage = Math.abs(
      Math.floor(pagesHolderRef.current.scrollLeft / y.clientWidth)
    );
    setIndex(newPage);
  }, 150);

  useEffect(() => {
    const el = document.getElementById(`carousell-${index}`);
    if (el) el.scrollIntoView();
  }, [index]);

  return (
    <Container ref={pagesHolderRef} onScroll={handleScroll}>
      {children.map((child, index) => (
        <CurrQuestionContainer
          key={index}
          id={`carousell-${index}`}
          ref={(r) => (refArray.current[index] = r)}
        >
          {child}
        </CurrQuestionContainer>
      ))}
    </Container>
  );
}

Carousell.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number,
  setIndex: PropTypes.func,
};

export default Carousell;

const Container = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  width: 100%;
  height: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CurrQuestionContainer = styled.div`
  flex-shrink: 0;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  width: 100%;
  height: 100%;
`;
