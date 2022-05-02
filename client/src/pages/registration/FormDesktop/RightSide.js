import React, { useState } from "react";
import styled from "styled-components";

import Form from "./Form";

import Steps from "./Steps";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";

import { useNavigate } from "react-router-dom";

function RightSide() {
  const navigate = useNavigate();

  const initialState = {
    step: 1,
    accountType: 1,
    name: "",
    email: "",
    website: "",
    password: "",
    confirmPassword: "",
  };

  const [state, setState] = useState(initialState);
  const { step } = state;

  const prevStep = () => {
    if (state.step === 1) {
      navigate("/");
    }
    if (state.step > 1) {
      setState({
        ...state,
        step: state.step - 1,
      });
    }
  };
  const nextStep = () => {
    if (state.step < 3) {
      setState({
        ...state,
        step: state.step + 1,
      });
    }
  };
  const handleChange = (input) => (e) => {
    if (e.target) {
      setState({ ...state, [input]: e.target.value });
    } else {
      setState({ ...state, [input]: e });
    }
  };
  return (
    <RightContainer>
      <Wrapper>
        <FormWrapper>
          <ArrowWrapper>
            <ArrowButton onClick={() => prevStep()}>
              <ArrowBackIcon />
            </ArrowButton>
          </ArrowWrapper>
          <Steps step={step} />
          <Form
            prevStep={prevStep}
            nextStep={nextStep}
            handleChange={handleChange}
            state={state}
          />
        </FormWrapper>
      </Wrapper>
    </RightContainer>
  );
}

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  height: 100vh;
`;

const ArrowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  background: #ded3f5;
  &:hover {
    opacity: 0.8;
  }
  position: absolute;
  top: 3.5rem;
  left: 3.5rem;
`;
const ArrowButton = styled(IconButton)`
  & svg {
    color: #8c52ff;
    font-size: 42px;
  }
`;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  position: relative;
`;

export default RightSide;
