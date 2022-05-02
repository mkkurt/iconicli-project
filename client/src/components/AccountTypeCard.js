import React from "react";
import styled from "styled-components";

import modelLogo from "images/models-icon.svg";
import clientLogo from "images/clients-icon.svg";

function AccountTypeCard(props) {
  const { header, text, type, selected, onClick } = props;
  return (
    <Selection type={type} selected={selected} onClick={onClick}>
      <SelectionLogo
        src={header === "Client" ? clientLogo : modelLogo}
        alt="Model Logo"
        type={type}
      />
      <TextWrapper type={type}>
        <SelectionHeader type={type}>{header}</SelectionHeader>
        <SelectionText type={type}>{text}</SelectionText>
      </TextWrapper>
    </Selection>
  );
}

const Selection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1rem;
  width: 90%;
  background: white;
  border: 3px solid #8c52ff;
  box-sizing: border-box;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  ${(props) =>
    props.type === "compact" &&
    `
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  width: 49%;
`}
  ${(props) =>
    props.selected && `background: #ded3f5; border: 2px solid #8C52FF;`}
`;

const SelectionLogo = styled.img`
  margin-left: 2rem;
  ${(props) => {
    if (props.type === "compact") {
      return `
          margin: 1rem;
        `;
    }
  }}
`;

const TextWrapper = styled.div``;

const SelectionHeader = styled.div`
  font-family: "Poppins";
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 2px;
  color: #1f0045;
  text-align: center;
  ${(props) => {
    if (props.type !== "compact") {
      return `
      font-weight: bold;
    margin-top: 1rem;
    margin-left: 1rem;
      `;
    }
  }}
`;

const SelectionText = styled.div`
  font-family: "Poppins";
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
  color: #1f0045;
  text-align: center;
  margin-bottom: 1rem;
`;

export default AccountTypeCard;
