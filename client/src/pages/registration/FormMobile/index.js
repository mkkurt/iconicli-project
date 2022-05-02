import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { clearMessage } from "slices/message";

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

function FormMobile() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

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

  const prevStep = () => {
    setState({ ...state, step: state.step - 1 });
  };
  const nextStep = () => {
    setState({ ...state, step: state.step + 1 });
  };
  const handleChange = (input) => (e) => {
    if (e.target) {
      setState({ ...state, [input]: e.target.value });
    } else {
      setState({ ...state, [input]: e });
    }
  };

  const { step } = state;

  const render = () => {
    switch (step) {
      case 1:
        return (
          <StepOne
            nextStep={nextStep}
            handleChange={handleChange}
            state={state}
          />
        );
      case 2:
        return (
          <StepTwo
            prevStep={prevStep}
            nextStep={nextStep}
            handleChange={handleChange}
            state={state}
          />
        );
      case 3:
        return (
          <StepThree
            prevStep={prevStep}
            handleChange={handleChange}
            state={state}
          />
        );
    }
  };

  return <Container>{render()}</Container>;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  @media (min-width: 1224px) {
    display: none;
  }
`;

export default FormMobile;
