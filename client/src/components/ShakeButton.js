import React, { useEffect } from "react";
import styled from "styled-components";

function ShakeButton(props) {
  const { text, onClick, shakeButton, setShakeButton } = props;

  useEffect(() => {
    if (shakeButton) {
      setTimeout(() => setShakeButton(false), 1000);
    }
  }, [shakeButton]);

  return (
    <Container onClick={onClick} shake={shakeButton} type="submit">
      {text}
    </Container>
  );
}

const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1f0045;
  border-radius: 8px;
  border: none;
  font-family: "Roboto";
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
  padding: 1rem 2rem;
  margin-top: 2.5rem;
  max-width: 40%;
  cursor: pointer;

  ${({ shake }) =>
    shake &&
    `animation: shake 1s;
    @keyframes shake {
      0% { transform: translate(30px); }
			20% { transform: translate(-30px); }
			40% { transform: translate(15px); }
			60% { transform: translate(-15px); }
			80% { transform: translate(8px); }
			100% { origin-transform: translate(0px); }
    }
    `}
`;

export default ShakeButton;
