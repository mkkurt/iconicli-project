import React, { useState } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { clearMessage, setMessage } from "slices/message";
import { stepTwoValidationSchema } from "utils/validationSchema";

import LoginBackButton from "components/LoginBackButton";
import MobileHeader from "components/MobileHeader";
import TextInput from "components/TextInput";
import ShakeButton from "components/ShakeButton";

function StepTwo(props) {
  const { nextStep, prevStep, handleChange, state } = props;
  const { step, name, email, website, accountType } = state;
  const isClient = accountType === 2;

  const [shakeButton, setShakeButton] = useState(false);
  const [drawerToggle, setDrawerToggle] = useState(false);

  const { message } = useSelector((state) => state.messageState);
  const dispatch = useDispatch();

  const handleValidation = (e) => {
    e.preventDefault();
    try {
      stepTwoValidationSchema.validateSync({
        name,
        email,
        website,
      });
      dispatch(clearMessage());
      nextStep();
    } catch (error) {
      const message = error.message || error.toString();
      dispatch(setMessage(message));
      setShakeButton(true);
      return false;
    }
  };

  return (
    <Container>
      <MobileHeader
        desktopDrawerToggle={drawerToggle}
        setDesktopDrawerToggle={setDrawerToggle}
      />
      <TopBar>
        <LoginBackButton step={step} prevStep={prevStep} />
        <TopBarHeader>Almost there...</TopBarHeader>
      </TopBar>
      <Inputs>
        {message ? <Error>{message}</Error> : <Error>&nbsp;</Error>}
        <TextInput
          placeholder={isClient ? "Company Name" : "First and Last Name"}
          type={"text"}
          value={name}
          onChange={(e) => handleChange("name")(e)}
          onCancel={() => handleChange("name")("")}
        />
        {isClient ? (
          <TextInput
            placeholder="Company Website"
            type={"text"}
            value={website}
            onChange={(e) => handleChange("website")(e)}
            onCancel={() => handleChange("website")("")}
          />
        ) : null}
        <TextInput
          placeholder="Email"
          type={"email"}
          value={email}
          onChange={(e) => handleChange("email")(e)}
          onCancel={() => handleChange("email")("")}
        />
      </Inputs>
      <ProgressBar>
        <ProgressBarItemCurrent />
        <ProgressBarItemCurrent />
        <ProgressBarItem />
      </ProgressBar>
      <ShakeButton
        onClick={handleValidation}
        shakeButton={shakeButton}
        setShakeButton={setShakeButton}
        text={"Next"}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
`;

const Error = styled.p`
  font-family: "Roboto";
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #ff0000;
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
  font-size: 18px;
  color: #1f0045;
  margin-left: 2rem;
`;

const Inputs = styled.div`
  width: 90%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  // margin-top: 2rem;
`;

const ProgressBar = styled.div`
  width: 90%;
  display: flex;
  margin-top: 1rem;
  justify-content: space-between;
`;

const ProgressBarItem = styled.div`
  width: 27%;
  height: 1px;
  background: rgba(255, 199, 16, 0.23);
  border: 0.1rem solid rgba(255, 199, 16, 0.23);
`;

const ProgressBarItemCurrent = styled.div`
  width: 27%;
  height: 1px;
  background: #ffc710;
  border: 0.1rem solid #ffc710;
`;

export default StepTwo;
