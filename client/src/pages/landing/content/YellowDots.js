import React from "react";
import styled from "styled-components";

function YellowDots() {
  const dots = new Array(19).fill(0).map((_, i) => <Dot key={i} />);
  return <Container>{dots}</Container>;
}

const Container = styled.div`
  display: flex;
  width: 90%;
  margin-top: 100px;
  margin-bottom: 21px;

  @media (max-width: 1224px) {
    align-items: center;
    justify-content: center;
  }
`;

const Dot = styled.div`
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  background-color: #ffd700;
  margin: 0 0.4rem;
`;

export default YellowDots;
