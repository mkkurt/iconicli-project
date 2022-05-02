import React from "react";

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import Header from "./landing/header";
import Content from "./landing/content";
import Footer from "./landing/footer";

function Landing() {
  const { isLoggedIn } = useSelector((state) => state.authState);

  if (isLoggedIn) {
    return <Navigate to="/home" />;
  }
  return (
    <div>
      <Header show={true} />
      <Content />
      <Footer />
    </div>
  );
}

export default Landing;
