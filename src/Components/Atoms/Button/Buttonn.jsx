import React from 'react';
import { Button } from '@mui/material';

const Buttonn = ({ text, bgwhite, didPressButton, disabled }) => {
  return (
    <Button
    disabled={disabled}
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      color: bgwhite ? "black" : "white",
      backgroundColor: bgwhite ? "#fff" : "#7665cf",
      width: "100%",
      height: "100%",
      borderRadius: "10px",
      fontFamily: "MADE Outer Sans Outline sans-serif",
      fontSize: "1.1rem",
      cursor: "pointer",
      boxShadow: "2px 2px 2px 2px grey",
      alignSelf: 'center'
    }}
    onClick={() => didPressButton()}
  >
  {text}
  </Button>
  )
}

export default Buttonn