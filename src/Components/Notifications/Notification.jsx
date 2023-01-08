import React, { useState } from "react";
import "../Notifications/Notification.css";
import FullStackLogo from "../../Assets/logo/fullstacklogo.svg";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
import CustomAlert from "../Atoms/Alert/CustomAlert";
import Tabs from "../Atoms/Tabs/Tabs";
import { Button } from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notification = () => {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);

  const handleClickMeFunction = () => {
    setTimeout(() => {
      toast("Success! Notification Received Successfully.")
    }, 2000);
  }
 
  return (
    <div className="notification_main_div">
      <div className="notification_sub_main">
        <div className="back_icon_div">
          <ArrowBackIosNewIcon
            style={{ fontSize: "1.5rem" }}
            onClick={() => navigate(-1)}
          />
        </div>
        <div className="Notification_image_container">
          <img src={FullStackLogo} alt="" className="Login_sapid_logo_css" />
        </div>
        <div className="welcome_back_signin_div">
          Welcome back <br />
          to Development Environment
        </div>
        <div>
        <Button
          style={{
            marginTop: "3rem",
            height: "10rem",
            width: "10rem",
            backgroundColor: "red",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "1.2rem",
            border: '1px solid black'
          }}
          onClick={() => handleClickMeFunction()}
        >
          Click me
        </Button>
        <ToastContainer position="top-center" autoClose={2000} />
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
        <div className="tab_screen">
          <Tabs
            NotificationPressed={() => navigate("/notifications")}
            PhotoPressed={() => navigate("/upload/photo")}
            TextPressed={() => navigate("/write/text")}
            calculatorPressed={() => navigate("/calculator")}
          />
        </div>
      </div>
    </div>
  );
};

export default Notification;
