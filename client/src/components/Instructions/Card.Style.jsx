import styled from "styled-components";

export const Card = styled.div`
  margin-inline: var(--screen-margin);
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 15px;
  padding: 25px;
  padding-block-end: 35px;
  box-shadow: 0px 10px 8px #0000001f;
`;

export const Icon = styled.img`
  max-width: 70px;
  max-height: 70px;
`;

export const TopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-block-end: 1.25rem;
  gap: 16px;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 1.375rem;
`;
