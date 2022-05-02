import React, { useState } from "react";
import styled from "styled-components";

import AccountTypeCard from "components/AccountTypeCard";

import icon from "images/regLogo2.svg";

function StepOne(props) {
  const { nextStep, handleChange, state } = props;

  const { accountType } = state;

  return (
    <Container>
      <TopWrapper>
        <Icon src={icon} alt="Icon" />
        <TopHeader>Choose your account type</TopHeader>
        <TopContent>
          It will enable us to tailor your ICONICLI experience
        </TopContent>
      </TopWrapper>
      <AccountTypeCard
        header="Model"
        text="Become a star"
        selected={accountType === 1}
        onClick={() => handleChange("accountType")(1)}
      />
      <AccountTypeCard
        header="Client"
        text="Find talents"
        selected={accountType === 2}
        onClick={() => handleChange("accountType")(2)}
      />
      <NextButton onClick={() => nextStep()}>Next Step</NextButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
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
  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
  padding: 1rem 2rem;
  margin-top: 2.5rem;
  max-width: 40%;
  cursor: pointer;
`;

const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;
`;

const Icon = styled.img``;

const TopHeader = styled.div`
  font-family: "Poppins";
  font-weight: bold;
  font-size: 32px;
  line-height: 48px;
  color: #1f0045;
`;

const TopContent = styled.div`
  font-family: "Poppins";
  font-weight: regular;
  font-size: 16px;
  line-height: 24px;
  color: #6c6c6c;
  margin-bottom: 4rem;
`;

export default StepOne;
