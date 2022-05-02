import React from "react";
import "./header.css";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";

function SignupButton(props) {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate("/register")}>
      <Text>Sign Up</Text>
    </Container>
  );
}

const Container = styled.div`
  margin-left: 22px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  border: 1px solid #1f0045;
  box-sizing: border-box;
  border-radius: 8px;
  box-shadow: -3px 3px 6px rgba(0, 0, 0, 0.25);
  background-color: black;
  color: white;
  height: 40px;
  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 1224px) {
    display: none;
  }
`;

const Text = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
`;

export default SignupButton;
