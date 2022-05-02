import React, { useState } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { clearMessage, setMessage } from "slices/message";
import { stepTwoValidationSchema } from "utils/validationSchema";

import TextInput from "components/TextInput";
import ShakeButton from "components/ShakeButton";

function StepTwo(props) {
  const { nextStep, handleChange, state } = props;
  const { name, email, website, accountType } = state;
  const isClient = accountType === 2;

  const { message } = useSelector((state) => state.messageState);
  const dispatch = useDispatch();

  const [shakeButton, setShakeButton] = useState(false);

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
      <TopBarHeader>Almost there...</TopBarHeader>
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
        onClick={handleValidation}
        shakeButton={shakeButton}
        setShakeButton={setShakeButton}
        text={"Next Step"}
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

export default StepTwo;
