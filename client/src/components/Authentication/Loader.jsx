import Lottie from "lottie-react";
import success from "../../assets/Lotties/success.json";
import failed from "../../assets/Lotties/failed.json";
import loading from "../../assets/Lotties/loading.json";
import PropTypes from "prop-types";
import styled from "styled-components";
import Header from "../User/Header";
import { Translator } from "../Translation";

const lottiesMapper = {
  loading,
  success,
  failed,
};

function Loader({ state }) {
  return (
    <LoaderContainer>
      <Header />
      <StatusIndicator
        lottie={lottiesMapper[state]}
        onLoopComplete={console.log("finished")}
      />
      <Title>
        {/* <Translator>test</Translator> */}
        test
      </Title>
      <span></span>
    </LoaderContainer>
  );
}

Loader.propTypes = {
  state: PropTypes.oneOf(["loading", "success", "failed"]),
};

export default Loader;

const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
`;

const StatusIndicator = styled(Lottie).attrs(({ lottie }) => ({
  animationData: lottie,
  loop: false,
}))`
  align-self: center;
  height: 229px;
`;
