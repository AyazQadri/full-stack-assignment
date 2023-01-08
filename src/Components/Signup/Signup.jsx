import React, { useEffect, useState } from "react";
import "../Signup/Signup.css";
import InputFieldOutlined from "../Atoms/InputField/InputFieldOutlined";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
import FullStackLogo from "../../Assets/logo/fullstacklogo.svg";
import { ToastContainer } from "react-toastify";
import Buttonn from "../Atoms/Button/Buttonn";
import { Box } from "@mui/system";
import { passwordStrength } from 'check-password-strength'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from '../../Services/Firebase/config';
import { onValue, ref, set, update } from "firebase/database";
import CustomAlert from "../Atoms/Alert/CustomAlert";



const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(true);
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPasswordStrength, setShowPasswordStrength] = useState(false)
  const [showPasswordInstructions, setShowPasswordInstructions] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [alert, setAlert] = useState({
    title: '',
    text: '',
    errorType: ''
  })
  const [passwordStrengthText, setPasswordStrengthText] = useState()
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const handleTextFieldOnChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const showAlertMessage = (showAlert, errorType, title, text ) => {
    setAlert({
      ...alert,
      title: title,
      text: text, 
      errorType: errorType
    })
    setShowAlert(showAlert)
  }

  const handlePasswordOnChange = (e) => {
    const inputData = e.target.value
    setUserData({...userData, password: inputData})
    if (inputData){
      setShowPasswordStrength(true)
    } else {
      setShowPasswordStrength(false)
    }
    const checkPassword = passwordStrength(inputData)
    setPasswordStrengthText(checkPassword?.value)
  }

  const handleSignupWithEmail = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(userData.email)) {
      if (passwordStrengthText == "Strong"){
        setShowEmailError(false);
        createUserWithEmailAndPassword(auth, userData.email, userData.password).then((response) => {
          set(ref(db, "User"), {
            email: response?.user?.email,
            name: response.user.displayName,
          });
          navigate("/signin")
        }).catch((error) => {
          showAlertMessage(true, "error", 'Error', error.message)
        })

      } else {
        setShowPasswordInstructions(true)
      }
    } else if (!regEx.test(userData.email) && userData.email == "") {
      setShowEmailError(true);
    }
  };

  return (
    <div className="Signup_main_div">
      <div className="Signup_sub_main_div">
        {/* <div className="signup_back_icon_div">
          <ArrowBackIosNewIcon
            style={{ fontSize: "1.5rem" }}
            onClick={() => navigate(-1)}
          />
        </div> */}
        <div className="signup_image_container">
          <img src={FullStackLogo} alt="" className="signup_logo_css" />
        </div>
        <div className="create_your_account_text_div">Create your account</div>
        <div className="signup_input_fields_main_div">
          <div className="signup_one_input_field_div">
            <InputFieldOutlined
              textType={"text"}
              placeholderText={"Email"}
              onChangeTextField={(e) => handleTextFieldOnChange(e)}
              name="email"
              value={userData.email}
              notShowPasswordIcon={true}
            />
          </div>
          {showEmailError && (
            <Box
              style={{
                color: "red",
                fontSize: "small",
                display: 'flex',
                justifyContent: 'flex-start',
                width: '80%', 
                marginTop: '-10px',
                marginBottom: '1rem',
              }}
            >
              Please Enter the valid Email Address
            </Box>
          )}
          <div className="signup_one_input_field_div">
            <InputFieldOutlined
              textType={showPassword ? "password" : "text"}
              placeholderText={"Password"}
              onChangeTextField={(e) => handlePasswordOnChange(e)}
              name="password"
              value={userData.password}
              showPassword={showPassword}
              passwordToggle={() => setShowPassword(!showPassword)}
            />
          </div>
          {showPasswordStrength && <Box
              style={{
                color: "red",
                fontSize: "small",
                display: 'flex',
                justifyContent: 'flex-end',
                width: '80%', 
                marginTop: '-10px',
                marginBottom: '1rem',
              }}
            >
              {passwordStrengthText}
            </Box>}
            {showPasswordInstructions && <div style={{ width: '80%', fontSize: 'small', color: 'grey' }}>
              Password must contain combination of Small, Capital, Numbers and Special Characters. Like A@2asdF2020!!*
            </div>}
        </div>
        <div className="continue_btn_div">
          <Buttonn
            didPressButton={() => handleSignupWithEmail()}
            text={"Create Account"}
          />
        </div>
        <div className="dont_have_account_div">
          <text>
            Already have an account?
            <text
              className="Sign_up_text_css"
              onClick={() => navigate("/signin")}
              style={{ paddingLeft: '5px' }}
            >
              Login
            </text>
          </text>
        </div>
        <div className="terms_condition_div_main">
          <text>
            By siging up, you agree to our <br />
            <span className="terms_condition_css">Privacy Policy</span> and{" "}
            <span className="terms_condition_css">Terms of Use.</span>
          </text>
        </div>
      </div>
      <div>
        <CustomAlert 
        showAlert={showAlert}
        hideAlert={() => setShowAlert(false)}
        confirmPressed={() => setShowAlert(false)}
        title={alert.title}
        text={alert.text}
        errorType={alert.errorType}
        showCancelButton={false}
        showConfirmButton={true}
        confirmButtonText={"Ok"}
        />
      </div>
    </div>
  );
};

export default Signup;
