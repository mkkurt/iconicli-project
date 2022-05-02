import React, { useState } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { register, login } from "slices/auth";
import { clearMessage, setMessage } from "slices/message";
import { stepThreeValidationSchema } from "utils/validationSchema";

import TextInput from "components/TextInput";
import ShakeButton from "components/ShakeButton";

function StepThree(props) {
  const { handleChange, state } = props;
  const { name, email, website, password, confirmPassword, accountType } =
    state;

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
      const message = error.message || error.toString();
      dispatch(setMessage(message));
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
      <TopBarHeader>..final step! Choose a password</TopBarHeader>
      {message ? <Error>{message}</Error> : <Error>&nbsp;</Error>}
      <Inputs>
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
      <Info>
        <InfoText>
          It will enable us to tailor your ICONICLI experience
        </InfoText>
      </Info>

      <BottomDescription>
        It has never been this easy. As a model, you create a beautiful
        portfolio with photos, reels and voice recordings.
      </BottomDescription>
      <ShakeButton
        onClick={handleRegister}
        shakeButton={shakeButton}
        setShakeButton={setShakeButton}
        text={"Register"}
      />
    </Container>
  );
}

const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Error = styled.p`
  font-family: "Roboto";
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #ff0000;
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 3rem;
`;

const BottomDescription = styled.div`
  width: 90%;
  font-size: 1rem;
  margin-top: 2rem;
  font-family: "Poppins";
  visibility: hidden;
`;

const RegisterButton = styled.button`
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
  width: 100%;
  cursor: pointer;
`;

export default StepThree;
