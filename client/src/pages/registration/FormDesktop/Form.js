import React from "react";
import styled from "styled-components";

import StepOne from "../FormDesktop/StepOne";
import StepTwo from "../FormDesktop/StepTwo";
import StepThree from "../FormDesktop/StepThree";

function FormDesktop(props) {
  const { prevStep, nextStep, handleChange, state } = props;

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
      default:
        return null;
    }
  };

  return <Container>{render()}</Container>;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
  width: 60%;
  // background-color: #fafafa;
`;

export default FormDesktop;
