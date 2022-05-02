import React from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";

import DrawerMenu from "pages/landing/header/DrawerMenu";
import headerLogo from "images/header-logo.svg";

function MobileHeader(props) {
  const navigate = useNavigate();
  const alwaysShow = props.alwaysShow || false;

  return (
    <Container alwaysShow={alwaysShow}>
      <img
        src={headerLogo}
        alt="logo"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      />
      <DrawerMenu
        drawerToggle={props.desktopDrawerToggle}
        setDrawerToggle={props.setDesktopDrawerToggle}
      />
    </Container>
  );
}

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: #F3F3F3;
  display: flex;
  justify-content: space-between;
  padding: 0 1.5rem;
  align-items: center;
  height: 13vh;
  max-width: 100%;

  }
  ${(props) =>
    props.alwaysShow
      ? "display: flex;"
      : "@media (min-width: 1224px) { display: none; }"}
`;

export default MobileHeader;
