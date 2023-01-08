import React, { useState } from "react";
import "../Text/Text.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
import Tabs from "../Atoms/Tabs/Tabs";
import FullStackLogo from "../../Assets/logo/fullstacklogo.svg";
import Slide from "@mui/material/Slide";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { update, getDatabase, ref, get, child } from "firebase/database";
import BioPopup from "../Atoms/Dialog/BioPopup";

const Text = () => {
  const db = getDatabase();
  const navigate = useNavigate();
  const dbRef = ref(getDatabase());
  const [userBio, setUserBio] = useState("");
  const [showSlide, setShowSlide] = useState(false);
  const [showBioPopup, setShowBioPopup] = useState(false);
  const [data, setData] = useState()

  const submit = () => {
    update(ref(db, "User"), {
      userBio: userBio
    })
    setShowSlide(false)
    setUserBio('')
  }

  const fetchBioFirebase = () => {
    get(child(dbRef, `User`)).then((response) => {
      setData(response.val())
      setShowBioPopup(true)
    }).catch((error) =>{
      
    })
  }

  return (
    <div className="texxt_main_div">
      <div className="text_sub_main">
        <BioPopup
        showPopup={showBioPopup}
        hidePopup={() => setShowBioPopup(false)}
        data={data}
        />
        <div className="text_back_icon_div">
          <ArrowBackIosNewIcon
            style={{ fontSize: "1.5rem" }}
            onClick={() => navigate(-1)}
          />
        </div>
        <div className="text_image_container">
          <img src={FullStackLogo} alt="" className="text_logo_css" />
        </div>
        <div className="text_welcome_back_signin_div">
          Welcome back <br />
          to Development Environment
        </div>
        <Button
          style={{
            marginTop: "4rem",
            height: "5rem",
            width: "10rem",
            backgroundColor: "#7665cf",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            borderRadius: "10px",
          }}
          onClick={() => setShowSlide(true)}
        >
          Write Bio
        </Button>
        <Button 
        style={{ 
          marginTop: "4rem",
          height: "5rem",
          width: "10rem",
          backgroundColor: "#7665cf",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          borderRadius: "10px",
        }}
        onClick={fetchBioFirebase}
        >
          View Saved Bio
        </Button>
        <Slide
          in={showSlide}
          direction="up"
          timeout={{ appear: 500, enter: 500, exit: 500 }}
        >
          <div className="text_main_div">
            <div className="title_and_icon_main">
              <h3>About Yourself</h3>
              <KeyboardArrowDownIcon
              style={{
                fontSize: "3rem",
                position: 'absolute',
                right: '5%',
                top: '10%'
              }}
              onClick={() => setShowSlide(false)} 
              />
            </div>
            <div className="text_area_Css">
              <TextField
                autoFocus
                id="outlined-multiline-static"
                label="About Yourself"
                multiline
                name="userBio"
                value={userBio}
                rows={5}
                onChange={(e) => setUserBio(e.target.value)}
                sx={{ width: "100%", borderWidth: "10px" }}
              />
            </div>

            <div className="ef-button--container_save">
              <Button
                variant="contained"
                onClick={() => submit()}
                style={{
                  backgroundColor: "#7665cf",
                  borderRadius: "10px",
                  width: "80%",
                  marginTop: "1rem",
                }}
              >
                Save
              </Button>
            </div>
          </div>
        </Slide>
        <div className="_text_tab_screen">
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

export default Text;
