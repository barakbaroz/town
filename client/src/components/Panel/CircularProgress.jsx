import PropTypes from "prop-types";
import styled, { css, keyframes } from "styled-components";
import mark from "../../assets/Icons/mark.svg";

const CircularProgress = ({
  maxValue,
  progress,
  strokeWidth,
  startDegrees,
}) => {
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
          startDegrees={startDegrees}
          maxValue={maxValue}
          progress={progress}
        />
        $
      </SVG>
      {progress >= maxValue && <Icons src={mark} />}
    </Container>
  );
};

CircularProgress.propTypes = {
  maxValue: PropTypes.number,
  progress: PropTypes.number,
  strokeWidth: PropTypes.number,
  startDegrees: PropTypes.number,
};

export default CircularProgress;

const Container = styled.div`
  max-width: 60%;
  max-height: 60%;
  height: 60%;
  aspect-ratio: 1;
  padding-left: 1rem;
  position: relative;
`;

const Icons = styled.img`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 55%;
  left: 50%;
  height: 25%;
  width: 25%;
  transform: translate(0, -70%);
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
  ${({ maxValue, progress, strokeWidth, startDegrees }) =>
    css`
      r: calc(50% - ${strokeWidth} / 2);
      transform: rotate(${startDegrees}deg);
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
  startDegrees: -45,
};
