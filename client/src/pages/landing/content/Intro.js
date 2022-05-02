import React from "react";
import styled from "styled-components";

import img from "images/img2.jpg";

function Intro() {
  return (
    <Container>
      <Desktop.Wrapper>
        <Desktop.Header>What is ICONICLI?</Desktop.Header>
        <Desktop.Content>
          <Desktop.Image src={img} alt="img" />
          <Desktop.TextContent>
            <Desktop.TextContentHeader>
              Online service for
              <br />
              models and brands
            </Desktop.TextContentHeader>
            <Desktop.Text1>
              ICONICLI is a digital service that connects freelancing models
              with brands worldwide.
            </Desktop.Text1>
            <Desktop.Text2>
              It's an ALL IN ONE service for finding and booking diverse models
              from a huge database of profile, wherever and whenever needed.
            </Desktop.Text2>
            <Desktop.Text3>
              The service is build with cutting edge technology to make your
              workflow as effortless as possible.
            </Desktop.Text3>
            <Desktop.Text4>
              No more paperwork, exaggerated fees, and stressful deadlines!
            </Desktop.Text4>
          </Desktop.TextContent>
        </Desktop.Content>
      </Desktop.Wrapper>
      <Mobile.Wrapper>
        <Mobile.ImageWithCaption>
          <Mobile.ImageContainer
            style={{
              position: "relative",
              margin: "10px",
              float: "left",
              boxShadow: "inset 0px -210px 200px -200px black",
              borderRadius: "0px 0px 5% 5%",
            }}
          >
            <Mobile.Image src={img} alt="img" />
          </Mobile.ImageContainer>
          <Mobile.ImageCaption>
            ICONICLI is a digital service that connects freelancing models with
            brands worldwide.
          </Mobile.ImageCaption>
        </Mobile.ImageWithCaption>
        <Mobile.TextContent>
          <Mobile.Text1>
            It's an ALL IN ONE service for finding and booking diverse models
            from a huge database of profile, wherever and whenever needed.
          </Mobile.Text1>
          <Mobile.Text2>
            No more paperwork, exaggerated fees, and stressful deadlines!
          </Mobile.Text2>
        </Mobile.TextContent>
      </Mobile.Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Desktop = {
  Wrapper: styled.div`
    display: flex;
    width: 90%;
    align-items: center;
    ${"" /* background-color: #fafafa; */}
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 1224px) {
      display: none;
    }
  `,
  Header: styled.h2`
    font-family: "Poppins", sans-serif;
    font-size: 28px;
    font-weight: bold;
    margin-top: 21px;
    align-self: start;
  `,
  TextContentHeader: styled.h2`
    font-family: "Poppins", sans-serif;
    font-size: 35px;
    font-weight: bold;
    line-height: 52px;
    width: 60%;
  `,
  Content: styled.div`
    display: flex;
    justify-content: space-around;
  `,
  TextContent: styled.div`
    font-family: "Roboto", sans-serif;
    font-weight: regular;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    width: 50%;
    color: #1f0045;
  `,
  Text1: styled.span`
    margin-bottom: 19px;
    }
  `,
  Text2: styled.span`
    margin-bottom: 19px;
  `,
  Text3: styled.span`
    margin-bottom: 19px;
  `,
  Text4: styled.span``,
  Image: styled.img`
    width: 353px;
    height: 353px;
    box-shadow: -8px 8px #8c52ff;
  `,
};

const Mobile = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width: 1224px) {
      display: none;
    }
  `,
  ImageContainer: styled.div`
    width: 100%;
  `,
  Image: styled.img`
    display: block;
    width: 100%;
    object-fit: contain;
    position: relative;
    z-index: -1;
    border-radius: 0px 0px 5% 5%;
  `,
  ImageWithCaption: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  ImageCaption: styled.span`
    position: absolute;
    bottom: 1.5rem;
    max-width: 90vw;
    width: 70%;
    left: 50%;
    transform: translateX(-50%);
    color: white;
  `,
  TextContent: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
    font-size: 15px;
    line-height: 22px;
    font-family: "Poppins", sans-serif;
  `,
  Text1: styled.span`
    margin-bottom: 1rem;
  `,
  Text2: styled.span``,
};

export default Intro;
