import { useState } from "react";
import styled from "styled-components";

const GuidanceSwitcher = () => {
  const [myGuidances, setMyGuidances] = useState(true);
  const changeGuidance = () => {
    setMyGuidances(!myGuidances);
  };
  return (
    <GuideanceSwitcher>
      <AllGuidances myGuidances={myGuidances} onClick={changeGuidance}>
        כל ההדרכות
      </AllGuidances>
      <MyGuidances myGuidances={myGuidances} onClick={changeGuidance}>
        הדרכות שלי
      </MyGuidances>
    </GuideanceSwitcher>
  );
};

export default GuidanceSwitcher;

const GuideanceSwitcher = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border-radius: 20px;
  background: #f4f4f4;
  padding: 0.4rem 0.4rem;
  height: var(--field-height);
  padding-block: var(--field-padding-block);
  font-family: Assistant;
  white-space: nowrap;
  font-weight: 600;
`;
const AllGuidances = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ myGuidances }) =>
    myGuidances ? "#f4f4f4" : "#84a4fc"};
  border-radius: 1rem;
  padding: ${({ myGuidances }) => (myGuidances ? "0 22px 0 0" : "0 22px")};
  height: 2rem;
  width: fit-content;
  box-shadow: ${({ myGuidances }) =>
    myGuidances ? "none" : "0px 2px 6px #00000029"};
  color: ${({ myGuidances }) => (myGuidances ? "black" : "white")};
`;
const MyGuidances = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ myGuidances }) =>
    myGuidances ? "#84a4fc" : "#f4f4f4"};
  border-radius: 1rem;
  padding: ${({ myGuidances }) => (myGuidances ? "0 22px" : "0 0 0 22px")};
  box-shadow: ${({ myGuidances }) =>
    myGuidances ? "0px 2px 6px #00000029" : "none"};
  color: ${({ myGuidances }) => (myGuidances ? "white" : "black")};
  height: 2rem;
  width: fit-content;
`;
