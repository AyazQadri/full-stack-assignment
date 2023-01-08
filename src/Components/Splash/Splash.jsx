import React, { useEffect } from "react";
import "./Splash.css";
import FullStackLogo from "../../Assets/logo/fullstacklogo.svg";
import logo from "../../Assets/logo/logo.svg";
import { useNavigate } from 'react-router-dom';

const Splash = () => {
  
  const navigate = useNavigate()  
  
  useEffect(() => {
    setTimeout(() => {
            navigate("/signup")
        }, 3000);
    }, [])

  return (
    <div className="Splash_screen_main_div">
      <div className="Splash_screen_sub_main_div">
        <div className="full_stack_logo">
          <img src={logo} alt="" className="logo_cssss" />
        </div>
        <div className="Splash_image_container">
          <img src={FullStackLogo} alt="" className="Splash_logo_css" />
        </div>
      </div>
    </div>
  );
};

export default Splash;
