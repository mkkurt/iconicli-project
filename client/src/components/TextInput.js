import React from "react";
import styled from "styled-components";

import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";

function TextInput(props) {
  const { placeholder, type, value, onChange, onCancel } = props;

  return (
    <Input
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={(e) => onChange(e)}
      fullWidth
      endAdornment={
        <IconButton onClick={onCancel}>
          <HighlightOffIcon />
        </IconButton>
      }
    />
  );
}

const Input = styled(InputBase)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 16px 16px 24px;
  width: 100%;
  height: 56px;
  background: #ece3ff;
  border: 0;
  outline: none;
  &:focus {
    border: 1px solid #8c52ff;
  }
  font-size: 16px;
  box-sizing: border-box;
  margin-bottom: 11px;
  border-radius: 8px;
`;

export default TextInput;
