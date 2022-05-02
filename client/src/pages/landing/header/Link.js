import React from "react";
import styled from "styled-components";

function Link(props) {
  const { text, href } = props;
  return (
    <Container>
      <a href={href}>{text}</a>
    </Container>
  );
}
const Container = styled.div`
  font-family: "Poppins";
  font-weight: regular;
  font-size: 1rem;
  margin: 0px 26px;
`;

export default Link;
