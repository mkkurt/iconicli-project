import React, { useState } from "react";
import styled from "styled-components";
import img from "images/woman1.jpg";
import Logo from "./Logo";
import LoginButton from "./LoginButton";
import SignupButton from "./SignupButton";
import Link from "./Link";

import DrawerMenu from "./DrawerMenu";

function Header(props) {
  const show = props.show || false;
  const [drawerToggle, setDrawerToggle] = useState(false);

  return (
    <Container show={show.toString()}>
      <DesktopLogo>
        <Logo />
      </DesktopLogo>
      <Links>
        <Link text="BENEFITS" href="#benefits" />
        <Link text="PRICING" href="#pricing" />
        <Link text="HOW IT WORKS" href="#how-it-works" />
        <Link text="FAQ" href="#faq" />
        <Link text="ABOUT" href="#about" />
        <Link text="CONTACT" href="#contact" />
      </Links>
      <Buttons>
        <LoginButton />
        <SignupButton />
      </Buttons>
      <MobileWrapper>
        <MobileLogoWrapper>
          <MobileLogo />
        </MobileLogoWrapper>
        <MobileRight>
          <LoginButton />
          <DrawerMenu
            drawerToggle={drawerToggle}
            setDrawerToggle={setDrawerToggle}
          />
        </MobileRight>
      </MobileWrapper>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 13vh;
  background-color: #f3f3f3;

  @media (max-width: 1224px) {
    display: ${(props) => (props.show ? "flex" : "none")};
    position: relative;
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      url(${img});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    width: auto;
    max-width: 100vw;
    align-items: start;
    justify-content: space-between;
    padding: 1rem 1rem 0 1rem;
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 1224px) {
    display: none;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1224px) {
    display: none;
  }
`;

const DesktopLogo = styled.div`
  @media (max-width: 1224px) {
    display: none;
  }
`;

const MobileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;

  @media (min-width: 1224px) {
    display: none;
  }
`;

const MobilLogoComp = () => <Logo size="9rem" />;

const MobileLogo = styled(MobilLogoComp)`
  display: none;
  @media (max-width: 1224px) {
    display: block;
  }
`;

const MobileLogoWrapper = styled.div`
  display: flex;
  // justify-content: center;
  // align-items: center;
  // background-color: red;
`;

const MobileRight = styled.div`
  display: flex;
  // justify-content: space-between;
  align-items: center;
  height: 100%;
  // width: 100%;
  // background-color: blue;
`;

export default Header;
