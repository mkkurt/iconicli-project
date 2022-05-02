import React from "react";
import styled from "styled-components";

import LogoutIcon from "@mui/icons-material/Logout";

function LogoutButton(props) {
  const { onClick } = props;

  return (
    <LogOutButton onClick={onClick}>
      <LogoutIcon />
      <LogoutText>Logout</LogoutText>
    </LogOutButton>
  );
}

const LogOutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  margin-left: 2rem;
  cursor: pointer;
  padding: 16px 24px;
  color: white;
  background: #8c52ff;
  box-shadow: -5px 5px 22px rgba(140, 82, 255, 0.5);
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: -5px 5px 22px rgba(140, 82, 255, 0.8);
    color: lightgray;
  }
`;

const LogoutText = styled.span`
  font-family: "Roboto";
  font-size: 1rem;
  margin-left: 0.5rem;
`;

export default LogoutButton;
