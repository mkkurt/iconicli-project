import React from "react";
import styled from "styled-components";

import img1 from "images/hassan.jpeg";
import img2 from "images/emre.jpeg";

function About() {
  return (
    <Container id="about">
      <Header>What they say about ICONICLI</Header>
      <IntroContainer>
        <Card>
          <ContentWrapper>
            <Image src={img1} alt="img" />
            <TextWrapper>
              <CardHeader>KAI, 31</CardHeader>
              <JobTitle>Freelance photographer</JobTitle>
              <TextContent>
                “Saved the day, again and again! Booking the right profile has
                never been this fast, affordable and effortless!”
              </TextContent>
            </TextWrapper>
          </ContentWrapper>
        </Card>
        <div
          style={{
            borderLeft: "1px solid #FFC710",
            maxHeight: "500px",
            margin: " 0px 43px",
          }}
        ></div>
        <Card>
          <ContentWrapper>
            <Image src={img2} alt="img" />
            <TextWrapper>
              <CardHeader>EMELIE, 25</CardHeader>
              <JobTitle>Model</JobTitle>
              <TextContent>
                “I’m so grateful for the career opportunities that have been
                possible thanks to ICONICLI”
              </TextContent>
            </TextWrapper>
          </ContentWrapper>
        </Card>
      </IntroContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;

  @media (max-width: 1224px) {
    display: none;
  }
`;

const Header = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: bold;
  line-height: 42px;
  align-self: start;
  margin-bottom: 96px;
`;

const JobTitle = styled.p`
  font-family: "Roboto";
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 15px;
  color: #1f0045;
`;

const CardHeader = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: bold;
  line-height: 30px;
  color: #1f0045;
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
  align-items: center;
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

export default About;
