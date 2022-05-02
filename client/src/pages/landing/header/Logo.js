import React from "react";
import logo from "images/header-logo.svg";
import { useNavigate } from "react-router-dom";

function Logo(props) {
  const navigate = useNavigate();
  const size = props.size || "unset";
  return (
    <div onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
      <img src={logo} alt="logo" style={{ width: size }} />
    </div>
  );
}

export default Logo;
