import React from "react";
import styled from "styled-components";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";

function LoginBackButton(props) {
  const navigate = useNavigate();

  const { step, prevStep } = props;

  const handleClick = () => {
    if (step === 1) {
      navigate("/");
    } else {
      prevStep();
    }
  };
  return <Container onClick={handleClick} />;
}

const Container = styled(ArrowBackIosNewIcon)`
  cursor: pointer;
`;

export default LoginBackButton;
