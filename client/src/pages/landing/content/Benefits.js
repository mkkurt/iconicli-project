import React from "react";
import styled from "styled-components";

import img1 from "images/joshua.jpeg";
import img2 from "images/antoni.jpeg";

import benefits from "images/benefits.svg";
import benefitsSmall from "images/benefitsSmall.svg";

function Benefits() {
  return (
    <Container id="benefits">
      <Header>Why you should join ICONICLI</Header>
      <TopContainer>
        <IntroContainer>
          <Card>
            <ForHeader>FOR MODELS</ForHeader>
            <WithDots>
              <ContentWrapper>
                <Image src={img1} alt="img" />
                <TextWrapper>
                  <CardHeader>WORK WITH CLIENTS WORLDWIDE</CardHeader>
                  <TextContent>
                    Our clients come from all around the globe.
                    <br />
                    <br />
                    You can apply to jobs near your or on the other side of the
                    planet
                    <br />
                    <br />
                    The choice is always yours
                  </TextContent>
                </TextWrapper>
              </ContentWrapper>
              <SvgDots />
            </WithDots>
          </Card>
          <div
            style={{
              borderLeft: "1px solid #FFC710",
              maxHeight: "500px",
              margin: " 0px 43px",
            }}
          ></div>
          <Card>
            <ForHeader>FOR CLIENTS</ForHeader>
            <WithDots>
              <ContentWrapper>
                <Image src={img2} alt="img" />
                <TextWrapper>
                  <CardHeader>AFFORDABLE, DON'T SPEND MORE</CardHeader>
                  <TextContent>
                    Thanks to an automation and digitalization, booking models
                    to create first class content, is now possible to smaller
                    brands and start-ups.
                    <br />
                    <br />
                    Get the most out of your resources.
                  </TextContent>
                </TextWrapper>
              </ContentWrapper>
              <SvgDots />
            </WithDots>
          </Card>
        </IntroContainer>
      </TopContainer>
      <BottomContainer>
        <BottomHeader>BE PART OF SOMETHING BIGGER! </BottomHeader>
        <BenefitsSmall src={benefitsSmall} alt="benefits" />
        <BottomText>
          By using and supporting ICONICLI, you will automatically contributing
          to, and be part of a higher purpose! We strive to make a better world
          by supporting 3 of the 17 Global Goals for 2030, which are connected
          to the modeling, marketing and media industry.
        </BottomText>
        <BenefitsBig src={benefits} alt="benefits" />
      </BottomContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;

const TopContainer = styled.div`
  @media (max-width: 1224px) {
    display: none;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 90px;
  width: 60%;
`;

const BottomHeader = styled.div`
font-family: 'Poppins';
font-weight: regular
font-size: 28px;
line-height: 100%;
color: #1F0045;
margin: 20px 0px;

  @media (max-width: 1224px) {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  }
`;

const BottomText = styled.div`
  font-family: "Roboto";
  font-weight: regular;
  font-size: 18px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 1.5px;
  color: #1f0045;
  margin: 20px 0px;

  @media (max-width: 1224px) {
    margin: 50px 0px;
  }
`;

const Header = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: bold;
  line-height: 42px;
  align-self: start;
  margin-bottom: 96px;

  @media (max-width: 1224px) {
    display: none;
  }
`;

const ForHeader = styled.p`
  font-family: "Poppins";
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  color: #1f0045;
  margin-bottom: 41px;
`;

const CardHeader = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: bold;
  line-height: 30px;
  color: #1f0045;
  margin-bottom: 15px;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  box-shadow: -8px 8px #8c52ff;
`;

const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  max-height: 500px;
  justify-content: start;
`;
const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const TextContent = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: regular;
  font-size: 16px;
  word-wrap: break-word;
  color: #1f0045;
`;

const BenefitsBig = styled.img`
  @media (max-width: 1224px) {
    display: none;
  }
`;

const BenefitsSmall = styled.img`
  width: 90vw;
  @media (min-width: 1224px) {
    display: none;
  }
`;

const SvgDots = () => (
  <svg
    width="120"
    height="26"
    style={{ marginTop: "50px" }}
    viewBox="0 0 120 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_2_225)">
      <circle cx="13" cy="10" r="7" fill="#8C52FF" />
    </g>
    <circle cx="35" cy="10" r="5" fill="#1F0045" />
    <circle cx="55" cy="10" r="5" fill="#1F0045" />
    <circle cx="75" cy="10" r="5" fill="#1F0045" />
    <circle cx="95" cy="10" r="5" fill="#1F0045" />
    <circle cx="115" cy="10" r="5" fill="#1F0045" />
    <defs>
      <filter
        id="filter0_d_2_225"
        x="0"
        y="0"
        width="26"
        height="26"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="3" />
        <feGaussianBlur stdDeviation="3" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_2_225"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_2_225"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

const WithDots = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default Benefits;
