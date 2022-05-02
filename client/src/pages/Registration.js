import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import FormMobile from "./registration/FormMobile";
import FormDesktop from "./registration/FormDesktop";

function Registration() {
  const { isLoggedIn } = useSelector((state) => state.authState);

  if (isLoggedIn) {
    return <Navigate to="/home" />;
  }
  return (
    <Container>
      <FormDesktop />
      <FormMobile />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
`;

export default Registration;
