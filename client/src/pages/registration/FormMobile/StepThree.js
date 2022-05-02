import React, { useState } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { register, login } from "slices/auth";
import { clearMessage, setMessage } from "slices/message";
import { stepThreeValidationSchema } from "utils/validationSchema";

import LoginBackButton from "components/LoginBackButton";
import MobileHeader from "components/MobileHeader";
import TextInput from "components/TextInput";
import ShakeButton from "components/ShakeButton";

function StepThree(props) {
  const { prevStep, handleChange, state } = props;

  const { step, name, email, website, password, confirmPassword, accountType } =
    state;

  const [drawerToggle, setDrawerToggle] = useState(false);

  const [shakeButton, setShakeButton] = useState(false);

  const { message } = useSelector((state) => state.messageState);
  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();
    try {
      stepThreeValidationSchema.validateSync({
        password,
        confirmPassword,
      });
    } catch (error) {
      dispatch(setMessage(error.message));
      setShakeButton(true);
      return false;
    }
    const data = {
      name,
      email,
      password,
      website: accountType === 2 ? website : null,
      roles: accountType === 2 ? ["client"] : ["model"],
    };
    dispatch(register(data))
      .unwrap()
      .then(() => {
        dispatch(login({ email, password }))
          .unwrap()
          .catch((error) => {
            alert(error.message);
            return false;
          });
      })
      .catch((error) => {
        setShakeButton(true);
        return false;
      });
  };

  return (
    <Container>
      <MobileHeader
        desktopDrawerToggle={drawerToggle}
        setDesktopDrawerToggle={setDrawerToggle}
      />
      <TopBar>
        <LoginBackButton step={step} prevStep={prevStep} />
        <TopBarHeader>..final step! Choose a password</TopBarHeader>
      </TopBar>
      <Inputs>
        {message ? <Error>{message}</Error> : <Error>&nbsp;</Error>}
        <TextInput
          placeholder="Password"
          type={"password"}
          value={password}
          onChange={(e) => handleChange("password")(e)}
          onCancel={() => handleChange("password")("")}
        />
        <TextInput
          placeholder="Confirm password"
          type={"password"}
          value={confirmPassword}
          onChange={(e) => handleChange("confirmPassword")(e)}
          onCancel={() => handleChange("confirmPassword")("")}
        />
      </Inputs>
      <ProgressBar>
        <ProgressBarItemCurrent />
        <ProgressBarItemCurrent />
        <ProgressBarItemCurrent />
      </ProgressBar>
      {/* <RegisterButton onClick={handleRegister}>Register</RegisterButton> */}
      <ShakeButton
        onClick={handleRegister}
        shakeButton={shakeButton}
        setShakeButton={setShakeButton}
        text={"Register"}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
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

const Info = styled.div`
  width: 90%;
  margin-top: 1rem;
  visibility: hidden;
`;

const InfoText = styled.p`
  font-size: 1.5rem;
  font-weight: 200;
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
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  //   background: #ded3f5;
`;

const ProgressBarItemCurrent = styled.div`
  width: 27%;
  height: 1px;
  // margin-top: 1rem;
  background: #ffc710;
  border: 0.1rem solid #ffc710;
`;

export default StepThree;
