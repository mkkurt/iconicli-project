import React, { useState } from "react";
import styled from "styled-components";

import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import MobileHeader from "components/MobileHeader";
import Header from "./landing/header";
import LoginForm from "./login/LoginForm";
import Cta from "./login/Cta";

function Login() {
  const mobile = useMediaQuery({ maxWidth: 1224 });
  const { isLoggedIn } = useSelector((state) => state.authState);
  const [drawerToggle, setDrawerToggle] = useState(false);

  if (isLoggedIn) {
    return <Navigate to="/home" />;
  }
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <MobileHeader
        desktopDrawerToggle={drawerToggle}
        setDesktopDrawerToggle={setDrawerToggle}
      />
      <IsDesktop>
        <Header />
      </IsDesktop>
      <Container>
        <ContentWrapper>
          <IsDesktop>
            <Cta />
          </IsDesktop>
          <CtaMobile>Log in to continue the journey!</CtaMobile>
          <LoginForm mobile={mobile} />
          <MobileSignUp>
            If you are not a member yet, you can{" "}
            <Here href="/register">sign up here!</Here>
          </MobileSignUp>
        </ContentWrapper>
      </Container>
    </div>
  );
}

const IsDesktop = styled.div`
  @media (max-width: 1224px) {
    display: none;
  }
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #f3f3f3;
`;

const ContentWrapper = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  @media (max-width: 1224px) {
    flex-direction: column;
    justify-content: start;
`;

const CtaMobile = styled.div`
  display: none;
  @media (max-width: 1224px) {
    display: block;
    font-size: 18px;
    font-weight: bold;
    margin: 2rem 0;
  }
`;

const MobileSignUp = styled.p`
  display: none;
  @media (max-width: 1224px) {
    display: block;
    margin-top: 2rem;
    text-align: center;
    font-size: 18px;
    line-height: 1.5;
    font-family: "Poppins", sans-serif;
  }
`;

const Here = styled.a`
  color: #8c52ff;
  text-decoration: underline;
`;

export default Login;
