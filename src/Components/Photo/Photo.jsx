import React, { useState } from "react";
import "../Photo/Photo.css";
import FullStackLogo from "../../Assets/logo/fullstacklogo.svg";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Tabs from "../Atoms/Tabs/Tabs";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { ref as ref_storage, uploadBytes, getDownloadURL, getStorage, } from "firebase/storage";
import { getDatabase, ref, update } from "firebase/database";
import { getAuth } from "firebase/auth";
import { CircularProgress } from "@mui/material";


const Photo = () => {
  const db = getDatabase();
  const auth = getAuth();
  const storage = getStorage();
  const navigate = useNavigate();
  const [selectedPhoto, setSelectedPhoto] = useState();
  const [previewImage, setPreviewImage] = useState();
  const [showLoader, setShowLoader] = useState(false)

  const handleImageOnChange = (e) => {
    setShowLoader(true)
    const imgRef = ref_storage(storage, `image`);
    uploadBytes(imgRef, e.target.files[0]).then((res) => {
        getDownloadURL(ref_storage(storage, `image`)).then((url) => {
          setPreviewImage(url)
          update(ref(db, "User"), {
            profileUrl: url,
          })
          setShowLoader(false)
        }).catch((error) => {
          setShowLoader(false)
        })
    }).catch((error) => {
      setShowLoader(false)
    })
  };

  return (
    <div className="photo_main_div">
      { showLoader ?
        <CircularProgress style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }} /> : 
      <div className="photo_sub_main">
        <div className="photo_back_icon_div">
          <ArrowBackIosNewIcon
            style={{ fontSize: "1.5rem" }}
            onClick={() => navigate(-1)}
          />
        </div>
        <div className="photo_image_container">
          <img src={FullStackLogo} alt="" className="photo_logo_css" />
        </div>
        <div className="photo_welcome_back_signin_div">
          Welcome back <br />
          to Development Environment
        </div>
        {previewImage && (
          <div className="previewImage_main_div">
            <img src={previewImage} alt="" className="preview_iamge_css" />
            <label for="file">
            <ModeEditOutlineOutlinedIcon
              style={{
                position: "absolute",
                right: 10,
                bottom: 10,
                fontSize: "2rem",
                color: "white",
              }}
            />
            </label>
            <DeleteOutlineOutlinedIcon 
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              fontSize: "2rem",
              color: "white",
            }}
            onClick={() => setPreviewImage('')}
            />
          </div>
        )}
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
        >
          <input
            type="file"
            id="file"
            accept="image/*"
            className="photo_selectImage_css"
            onChange={(e) => handleImageOnChange(e)}
          />
          <label for="file" className="attachfile_label">
            Upload Photo
          </label>
        </Button>
        <div className="_photo_tab_screen">
          <Tabs
            NotificationPressed={() => navigate("/notifications")}
            PhotoPressed={() => navigate("/upload/photo")}
            TextPressed={() => navigate("/write/text")}
            calculatorPressed={() => navigate("/calculator")}
          />
        </div>
      </div>}
    </div>
  );
};

export default Photo;
