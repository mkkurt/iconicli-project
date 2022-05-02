import React, { useEffect } from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { clearMessage } from "slices/message";

import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

function FormDesktop() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);
  return (
    <Container>
      <LeftSide />
      <RightSide />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100vw;
  @media (max-width: 1224px) {
    display: none;
  }
`;

export default FormDesktop;
