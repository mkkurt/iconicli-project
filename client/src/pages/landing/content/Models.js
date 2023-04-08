import React from "react";
import styled from "styled-components";

import model1 from "../../../images/emre.jpeg";

function Models() {
  const models = [
    {
      id: 1,
      name: "CAMILLA, 29",
      location: "London",
      image: model1,
    },
    {
      id: 2,
      name: "CAMILLA, 29",
      location: "London",
      image: model1,
    },
    {
      id: 3,
      name: "CAMILLA, 29",
      location: "London",
      image: model1,
    },
  ];

  return (
    <Container>
      <Desktop.Wrapper>
        <Desktop.Header>Book talented models instantly</Desktop.Header>
        <Desktop.ProfileCount>
          3150<span style={{ color: "black" }}>&nbsp;Profiles</span>
        </Desktop.ProfileCount>
        <Desktop.ModelsSlider>
          {models.map((model) => (
            <Desktop.Card key={model.id}>
              <Desktop.Image src={model.image} alt="img" />
              <Desktop.CardBottom>
                <Desktop.Info>
                  <Desktop.Name>{model.name}</Desktop.Name>
                  <Desktop.ViewButton>VIEW</Desktop.ViewButton>
                </Desktop.Info>
                <Desktop.Location>{model.location}</Desktop.Location>
              </Desktop.CardBottom>
            </Desktop.Card>
          ))}
        </Desktop.ModelsSlider>
      </Desktop.Wrapper>
      <Mobile.Wrapper>
        <Mobile.Header>Book talented models instantly</Mobile.Header>
        <Mobile.ModelsSlider>
          <Mobile.Card>
            <Mobile.Image src={model1} alt="img" />
            <Mobile.CardBottom>
              <Mobile.Info>
                <Mobile.Name>CAMILLA, 29</Mobile.Name>
                <Mobile.Location>London</Mobile.Location>
              </Mobile.Info>
              <Mobile.ViewButton>VIEW</Mobile.ViewButton>
            </Mobile.CardBottom>
          </Mobile.Card>
        </Mobile.ModelsSlider>
      </Mobile.Wrapper>
    </Container>
  );
}

const Mobile = {
  Wrapper: styled.div`
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 1224px) {
      display: none;
    }
  `,
  Header: styled.h1`
    font-family: "Poppins", sans-serif;
    font-size: 28px;
    font-weight: bold;
    line-height: 42px;
    text-align: center;
  `,
  Image: styled.img`
    width: 295px;
    height: 368px;
    box-shadow: -8px 8px #8c52ff;
  `,
  ModelsSlider: styled.div`
    display: flex;
    justify-content: center;
    margin-top: 48px;
  `,
  Card: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Info: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
  Name: styled.span`
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    font-weight: regular;
    line-height: 30px;
  `,
  Location: styled.p`
    font-family: "Roboto", sans-serif;
    font-weight: regular;
    font-size: 16px;
    color: #8c52ff;
    margin-top: 12px;
  `,

  CardBottom: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-top: 22px;
  `,

  ViewButton: styled.button`
    border-radius: 8px;
    border: none;
    background-color: #8c52ff;
    padding: 8px 16px;
    color: white;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 14px;
    height: 70%;
    width: 100%;
    max-width: 72px;
    cursor: pointer;
  `,
};

const Desktop = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 48px;

    @media (max-width: 1224px) {
      display: none;
    }
  `,
  Header: styled.h1`
    font-family: "Poppins", sans-serif;
    font-size: 28px;
    font-weight: bold;
    line-height: 42px;
  `,
  ProfileCount: styled.div`
    color: #8c52ff;
    font-family: "Poppins";
    font-weight: 700;
    font-size: 28px;
    line-height: 42px;
  `,
  Image: styled.img`
    width: 295px;
    height: 368px;
    box-shadow: -8px 8px #8c52ff;
  `,
  ModelsSlider: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 48px;
  `,
  Card: styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 48px;
  `,
  Info: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  Name: styled.span`
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    font-weight: regular;
    line-height: 30px;
  `,
  Location: styled.p`
    font-family: "Roboto", sans-serif;
    font-weight: regular;
    font-size: 16px;
    color: #8c52ff;
    margin-top: 12px;
  `,

  CardBottom: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    margin-top: 22px;
  `,

  ViewButton: styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    border-radius: 8px;
    border: none;
    box-shadow: -2px 2px 11px #8c52ff;
    background-color: #8c52ff;
    color: white;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 14px;
  `,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

export default Models;
