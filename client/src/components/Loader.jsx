import styled from "styled-components";

const Loader = () => {
  return (
    <Load>
      <Spinner />
    </Load>
  );
};

export default Loader;

const Spinner = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #f02a4c;
  width: 100px;
  min-height: 100px;
  margin: 0 auto;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Load = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
`;
