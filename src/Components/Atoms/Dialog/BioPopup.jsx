import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { PaperProps } from "@mui/material";

const BioPopup = ({ showPopup, hidePopup, data }) => {
  return (
    <Dialog
      open={showPopup}
      keepMounted
      onClose={hidePopup}
      aria-describedby="alert-dialog-slide-description"
      PaperProps={{ style: {width: '350px'} }}
    >
      <DialogTitle style={{ display: "flex", alignSelf: "center" }}>
        {"Your Bio"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {data?.userBio}
        </DialogContentText>
      </DialogContent>
      <DialogActions style={{ display: 'flex', alignSelf: 'center', marginBottom: '10px' }}>
        <Button
          onClick={hidePopup}
          style={{
            width: "7rem",
            height: "20%",
            color: "white",
            backgroundColor: "#655CC9",
          }}
        >
          Disagree
        </Button>
        <Button
          onClick={hidePopup}
          style={{
            width: "7rem",
            height: "20%",
            color: "white",
            backgroundColor: "#655CC9",
          }}
        >
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BioPopup;
