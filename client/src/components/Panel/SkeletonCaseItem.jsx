import styled, { keyframes } from "styled-components";

export default function SkeletonCaseItem() {
  return <Case />;
}

const skeletonLoading = keyframes`
    from {
      background-color: hsl(200, 20%, 80%);
    }
    to {
      background-color: hsl(200, 20%, 95%);
    }
`;

const Case = styled.div`
  margin: 30px auto;
  width: 80%;
  height: 100px;
  border-radius: 15px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.16);
  background: white;
  animation: ${skeletonLoading} 1s linear infinite alternate;
`;
