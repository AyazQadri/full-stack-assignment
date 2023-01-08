import React, { useState } from 'react';
import '../Login/Login.css';
import { useNavigate } from 'react-router-dom';
import Buttonn from '../Atoms/Button/Buttonn';
import InputFieldOutlined from '../Atoms/InputField/InputFieldOutlined';
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import FullStackLogo from '../../Assets/logo/fullstacklogo.svg';
import PasswordDialog from '../Atoms/Dialog/Dialog';
import { signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { auth } from '../../Services/Firebase/config';
import CustomAlert from "../Atoms/Alert/CustomAlert";


const Login = () => {

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(true)
  const [email, setEmail] = useState()
  const [showPasswordPopup, setShowPasswordPopup] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [alert, setAlert] = useState({
    title: '',
    text: '',
    errorType: ''
  })
  const [userData, setUserData] = useState(
    {
      email: '', 
      password: ''
    }
  )

  const handleTextFieldOnChange = (e) => {
    const {name, value} = e.target;
    setUserData({...userData, [name] : value});
  }


  const showAlertMessage = (showAlert, errorType, title, text ) => {
    setAlert({
      ...alert,
      title: title,
      text: text, 
      errorType: errorType
    })
    setShowAlert(showAlert)
  }

  const signInPressFunc = () => {
    signInWithEmailAndPassword(auth, userData.email, userData.password).then((response) => {
      console.log(response, 'this is response')
      if (response?.user.uid){
          navigate("/notifications")
      }
    }).catch((error) => {
      showAlertMessage(true, 'error', "Error", error.message)
    })
  }

  const resetPasswordSubmitButton = () => {

  }

  

  
  return (
    <div className="Login_screen_main_div">
      <div className="Login_screen_sub_main">
        <div className="back_icon_div">
          <ArrowBackIosNewIcon
            style={{ fontSize: "1.5rem" }}
            onClick={() => navigate(-1)}
          />
        </div>
        <div>
          <PasswordDialog 
          showPopup={showPasswordPopup}
          hidePopup={() => setShowPasswordPopup(false)}
          email={email}
          dataOnChange={(e) => setEmail(e.target.value)} 
          submilClick={() => resetPasswordSubmitButton()}
          />
        </div>
        <div className="Login_image_container">
          <img src={FullStackLogo} alt="" className="Login_sapid_logo_css" />
        </div>
        <div className="welcome_back_signin_div">
          Welcome back, <br />
          sign in your account
        </div>
        <div className="both_input_field_main_div">
          <div className="single_input_field_div">
            <InputFieldOutlined 
            name="email"
            placeholderText={"Email"} 
            textType={"text"}
            onChangeTextField={(e) => handleTextFieldOnChange(e)} 
            value={userData?.email}
            notShowPasswordIcon={true}
             />
          </div>
          <div className="single_input_field_div">
            <InputFieldOutlined
              name={"password"}
              placeholderText={"Password"}
              textType={showPassword ? "password" : 'text'}
              onChangeTextField={(e) => handleTextFieldOnChange(e)} 
              value={userData?.password}
              showPassword={showPassword}
              passwordToggle={() => setShowPassword(!showPassword)}
            />
          </div>
        </div>
        <div className="forgot_password_div" onClick={() => setShowPasswordPopup(true)}>Forgot Password?</div>
        <div className="continue_btn_div">
          <Buttonn 
          text={"Continue"} 
          didPressButton={signInPressFunc}
          />
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
        <div className="dont_have_account_div">
          <text>
            Don't have an account?{" "}
            <text
              className="Sign_up_text_css"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </text>
          </text>
        </div>
      </div>
    </div>
  )
}

export default Login