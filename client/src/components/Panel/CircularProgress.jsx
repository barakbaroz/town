import PropTypes from "prop-types";
import styled, { css, keyframes } from "styled-components";

export default function CircularProgress({ maxValue, progress, strokeWidth }) {
  return (
    <Container>
      <SVG>
        <BackCircle
          stroke="#DDDDDD"
          cx="50%"
          cy="50%"
          strokeWidth={strokeWidth}
          fillOpacity="0%"
          center="50%"
        />
        <FrontCircle
          stroke="#84A4FC"
          fill="#84A4FC"
          cx="50%"
          cy="50%"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fillOpacity="0%"
          maxValue={maxValue}
          progress={progress}
        />
        <Path
          d="M 0 0 l 4.5 -4 l -5.92 5.919 l -2.546 -2.545 a 1.172 1.172 0 1 0 -1.657 1.657 l 3.374 3.374 a 1.172 1.172 0 0 0 1.657 0 l 6.749 -6.749 a 1.172 1.172 0 0 0 -1.657 -1.657 Z"
          fill="#fff"
          show={progress >= maxValue}
        />
      </SVG>
    </Container>
  );
}

CircularProgress.propTypes = {
  maxValue: PropTypes.number,
  progress: PropTypes.number,
  strokeWidth: PropTypes.string,
};

const Container = styled.div`
  height: 60px;
  width: 60px;
  aspect-ratio: 1;
  padding-inline-start: 1rem;
`;

const BackCircle = styled.circle`
  ${({ strokeWidth }) =>
    css`
      r: calc(50% - ${strokeWidth} / 2);
    `};
`;

const fillAnimation = ({ maxValue, progress }) => keyframes`
from {
  stroke-dashoffset: calc(${Math.PI} * 100%);
}
to {
  stroke-dashoffset: calc(
    ((${maxValue} - ${progress}) / ${maxValue}) * ${Math.PI} * 100%
  );
}
`;

const completed = keyframes`
from {
  stroke-dashoffset: calc(${Math.PI} * 100%);
  fill-opacity : 0%;
}
50% {
  stroke-dashoffset: 0;
    fill-opacity : 0%;
}
to {
  stroke-dashoffset: 0;
    fill-opacity : 100%;
}
`;

const chooseAnimation = ({ maxValue, progress }) => {
  if (progress >= maxValue)
    return css`
      animation: ${completed} 2s ease-in-out forwards;
    `;
  return css`
    animation: ${fillAnimation({ maxValue, progress })} 1s ease-in-out forwards;
  `;
};

const FrontCircle = styled.circle`
  stroke-dasharray: calc(${Math.PI} * 100%);
  transform-origin: center;
  ${({ maxValue, progress, strokeWidth }) =>
    css`
      r: calc(50% - ${strokeWidth} / 2);
      transform: rotate(-45deg);
      ${chooseAnimation({ maxValue, progress })}
    `};
`;

const SVG = styled.svg`
  height: 100%;
  width: 100%;
`;

CircularProgress.defaultProps = {
  progress: 0,
  maxValue: 100,
  strokeWidth: "12%",
};

const Path = styled.path`
  translate: 50% 50%;
  scale: 1.65;
  fill-opacity: 0%;
  ${({ show }) =>
    show &&
    css`
      animation: ${completed} 2s ease-in-out forwards;
    `}
`;
