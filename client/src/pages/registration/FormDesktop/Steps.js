import React from "react";
import styled from "styled-components";

import CheckIcon from "@mui/icons-material/Check";

function Steps({ step }) {
  return (
    <Container>
      <Step>{step > 1 ? <CheckIcon /> : "1"}</Step>
      <Step>{step > 2 ? <CheckIcon /> : "2"}</Step>
      <Step>3</Step>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #f3f3f3;
  margin: 1rem;
`;

const Step = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffc710;
  color: white;
  margin: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export default Steps;
