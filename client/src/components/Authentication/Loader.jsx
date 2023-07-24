import Lottie from "lottie-react";
import success from "../../assets/Lotties/success.json";
import failed from "../../assets/Lotties/failed.json";
import loading from "../../assets/Lotties/loading.json";
import PropTypes from "prop-types";
import styled from "styled-components";
import Header from "../User/Header";
import { Translator } from "../Translation";
import { useNavigate } from "react-router-dom";

const lottiesMapper = {
  loading: { animationData: loading, loop: true },
  success: { animationData: success, loop: false },
  failed: { animationData: failed, loop: false },
  blocked: { animationData: failed, loop: false },
};

const navigationRoutes = {
  success: "/user/start",
  failed: "zehut",
};

function Loader({ state, setStatusState, reset }) {
  const navigate = useNavigate();
  const handleComplete = () => {
    const nextRoute = navigationRoutes[state];
    if (!nextRoute) return;
    setTimeout(() => {
      navigate(nextRoute);
      setStatusState("idle");
      reset();
    }, 2000);
  };

  return (
    <LoaderContainer>
      <Header />
      <StatusContainer>
        <StatusIndicator
          {...lottiesMapper[state]}
          onComplete={handleComplete}
        />
        <Title>
          <Translator>{`authentication-${state}-title`}</Translator>
        </Title>

        <Title>
          <Translator>{`authentication-${state}-subtitle`}</Translator>
        </Title>
      </StatusContainer>
      <span></span>
    </LoaderContainer>
  );
}

Loader.propTypes = {
  state: PropTypes.oneOf(Object.keys(lottiesMapper)),
  setStatusState: PropTypes.func,
  reset: PropTypes.func,
};

export default Loader;

const LoaderContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
`;

const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

const StatusIndicator = styled(Lottie)`
  width: 120px;
  max-width: 100%;
`;
