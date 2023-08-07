import styled from "styled-components";

export const Card = styled.div`
  margin-inline: 25px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 15px;
  padding-inline: 27px;
  padding-block-start: 20px;
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
  padding-block-start: 1.25rem;
  padding-block-end: 0.734rem;
  gap: 16px;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 1.375rem;
`;
