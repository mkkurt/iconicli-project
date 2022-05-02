import React, { useState } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "slices/auth";

import { Paper } from "@mui/material";
import LogoutButton from "components/LogoutButton";
import MobileHeader from "components/MobileHeader";
import Footer from "pages/landing/footer";

function Home() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authState);
  const [drawerToggle, setDrawerToggle] = useState(false);

  return (
    <Container>
      <MobileHeader
        alwaysShow={true}
        desktopDrawerToggle={drawerToggle}
        setDesktopDrawerToggle={setDrawerToggle}
      />
      <Content drawerToggle={drawerToggle}>
        <h1>Home</h1>
        <Paper>
          <h2>{user.name}</h2>
          <h3>{user.email}</h3>
        </Paper>
        <LogoutButton onClick={() => dispatch(logout())} />
        <Footer />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #f3f3f3;
`;

const Content = styled.div`
  ${({ drawerToggle }) => (drawerToggle ? "width: 80vw;" : "width: 100%;")}
  transition: width 0.3s ease-in-out;
  ${"" /* background-color: red; */}
`;

export default Home;
