import React from "react";
import img1 from "images/woman1.jpg";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";

function Cta() {
  const navigate = useNavigate();

  return (
    <CtaContainer>
      <CtaText>
        <CtaHeader>Find and book diverse models near you!</CtaHeader>
        <TextContent2>
          Join our community of models and brands, and start collaborating with
          diverse models to bring out the full potential of your brand!
        </TextContent2>
        <TextContent>
          Modeling and booking models has never been this easy!
        </TextContent>
        <CtaButton onClick={() => navigate("/register")}>
          CREATE AN ACCOUNT
        </CtaButton>
      </CtaText>
      <Image src={img1} alt="img1" />
    </CtaContainer>
  );
}

const CtaContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 90%;
  margin-top: 140px;

  @media (max-width: 1224px) {
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: 100%;
    color: white;
    text-align: center;
    margin-top: 10rem;
  }
`;

const CtaText = styled.div`
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  width: 35%;
  padding: 32px 0px;

  @media (max-width: 1224px) {
    width: 100%;
    padding: 0px;
    align-items: center;
  }
`;

const CtaHeader = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 35px;
  font-weight: bold;
  line-height: 52px;

  @media (max-width: 1224px) {
    font-size: 26px;
    line-height: 32px;
  }
`;

const TextContent = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: regular;
  font-size: 18px;
  line-height: 28px;
  word-wrap: break-word;
  margin: 32px 2.5rem;

  @media (max-width: 1224px) {
    margin-top: 5rem;
  }
`;

const TextContent2 = styled(TextContent)`
  @media (max-width: 1224px) {
    display: none;
  }
`;

const CtaButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  background: #8c52ff;
  color: #ffffff;
  box-shadow: -5px 5px 22px #8c52ff;
  border-radius: 8px;
  font: bold 24px Roboto, sans-serif;
  width: 60%;
  margin-top: 32px;
  cursor: pointer;

  @media (max-width: 1224px) {
    box-shadow: none;
    font: bold 18px Roboto, sans-serif;
    margin-top: 5rem;
  }
`;

const Image = styled.img`
  width: 353px;
  height: 353px;
  box-shadow: -8px 8px #8c52ff;

  @media (max-width: 1224px) {
    display: none;
  }
`;

export default Cta;
