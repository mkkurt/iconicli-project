import React from "react";
import styled from "styled-components";

import bigSvg from "images/bigSvg.svg";
import smallSvg from "images/smallSvg.svg";

function HowItWorks() {
  return (
    <Container id="how-it-works">
      <Header>
        How does <span style={{ color: "#8C52FF" }}>ICONICLI</span> work?
      </Header>
      <SvgContainer>
        <BigSvg src={bigSvg} alt="img" />
        <SmallSvg src={smallSvg} alt="img" />
      </SvgContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;

const SvgContainer = styled.div`
  margin: 100px 0;
`;

const BigSvg = styled.img`
  @media (max-width: 1224px) {
    display: none;
  }
`;

const SmallSvg = styled.img`
  @media (min-width: 1224px) {
    display: none;
  }
`;

const Header = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 28px;
  font-weight: bold;
  line-height: 42px;

  @media (max-width: 1224px) {
    text-align: center;
  }
`;

export default HowItWorks;
