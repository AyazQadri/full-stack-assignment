import React from "react";
import "../InputField/InputFieldOutlined.css";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const InputFieldOutlined = ({
  placeholderText,
  textType,
  value,
  onChangeTextField,
  name,
  showPassword,
  passwordToggle,
  notShowPasswordIcon
}) => {
  return (
    <div className="input_field_outlined_main">
      <input
        type={
          textType == "text" ? "text" : textType == "password" ? "password" : ""
        }
        name={name}
        value={value}
        onChange={(e) => onChangeTextField(e)}
        placeholder={placeholderText}
        className="input_field_css_outlined"
      />
      {!notShowPasswordIcon && showPassword ?
        <RemoveRedEyeIcon
          style={{
            position: "absolute",
            right: 8,
            fontSize: "20px",
            cursor: "pointer",
            color: 'grey'
          }}
          onClick={() => passwordToggle()}
        /> : !notShowPasswordIcon ?
        <VisibilityOffIcon
          style={{
            position: "absolute",
            right: 8,
            fontSize: "20px",
            cursor: "pointer",
            color: 'grey'
          }}
          onClick={() => passwordToggle()}
        /> 
        : ''
      }
    </div>
  );
};

export default InputFieldOutlined;
