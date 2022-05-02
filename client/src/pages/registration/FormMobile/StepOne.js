import React, { useState } from "react";
import styled from "styled-components";

import AccountTypeCard from "components/AccountTypeCard";
import LoginBackButton from "components/LoginBackButton";
import MobileHeader from "components/MobileHeader";

function StepOne(props) {
  const { nextStep, handleChange, state } = props;

  const { step, accountType } = state;
  const [drawerToggle, setDrawerToggle] = useState(false);

  return (
    <Container>
      <MobileHeader
        desktopDrawerToggle={drawerToggle}
        setDesktopDrawerToggle={setDrawerToggle}
      />
      <TopBar>
        <LoginBackButton step={step} />
        <TopBarHeader>Choose your account type</TopBarHeader>
      </TopBar>
      <Info>
        <InfoText>
          It will enable us to tailor your ICONICLI experience
        </InfoText>
      </Info>
      <Selections>
        <AccountTypeCard
          header="Model"
          text="Become a star"
          type="compact"
          selected={accountType === 1}
          onClick={() => handleChange("accountType")(1)}
        />
        <AccountTypeCard
          header="Client"
          text="Find talents"
          type="compact"
          selected={accountType === 2}
          onClick={() => handleChange("accountType")(2)}
        />
      </Selections>
      <BottomDescription>
        It has never been this easy. As a model, you create a beautiful
        portfolio with photos, reels and voice recordings.
      </BottomDescription>
      <ProgressBar>
        <ProgressBarItemCurrent />
        <ProgressBarItem />
        <ProgressBarItem />
      </ProgressBar>
      <NextButton onClick={() => nextStep()}>Next Step</NextButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  // max-height: 100vh;
  // height: 100vh;
`;

const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const TopBarHeader = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  color: #1f0045;
`;

const Info = styled.div`
  width: 90%;
  margin-top: 1rem;
`;

const InfoText = styled.p`
  font-size: 1.5rem;
  font-weight: 200;
`;

const Selections = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

const BottomDescription = styled.div`
  width: 90%;
  font-size: 1rem;
  margin-top: 2rem;
  font-family: "Poppins";
`;

const ProgressBar = styled.div`
  width: 90%;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  //   background: #ded3f5;
`;

const ProgressBarItem = styled.div`
  width: 27%;
  height: 1px;
  margin-top: 1rem;
  background: rgba(255, 199, 16, 0.23);
  border: 0.1rem solid rgba(255, 199, 16, 0.23);
`;

const ProgressBarItemCurrent = styled.div`
  width: 27%;
  height: 1px;
  margin-top: 1rem;
  background: #ffc710;
  border: 0.1rem solid #ffc710;
`;

const NextButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1f0045;
  border-radius: 8px;
  border: none;
  font-family: "Roboto";
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 28px;
  color: #ffffff;
  padding: 1rem 2rem;
  margin-top: 2.5rem;
  max-width: 40%;
  width: 100%;
  cursor: pointer;
`;

export default StepOne;
