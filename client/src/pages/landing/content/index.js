import React from "react";
import Cta from "./Cta";
import Intro from "./Intro";
import Models from "./Models";
import HowItWorks from "./HowItWorks";
import Pricing from "./Pricing";
import Benefits from "./Benefits";
import About from "./About";
import YellowDots from "./YellowDots";

function Content() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Cta />
      <YellowDots />
      <Intro />
      <YellowDots />
      <Models />
      <YellowDots />
      <HowItWorks />
      <YellowDots />
      <Pricing />
      <YellowDots />
      <Benefits />
      <YellowDots />
      <About />
    </div>
  );
}

export default Content;
