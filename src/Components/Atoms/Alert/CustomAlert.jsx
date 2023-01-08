import React from "react";
import { Alert } from "@mui/material";
import AlertTitle from "@mui/material/AlertTitle";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { PaperProps } from "@mui/material";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { Box } from "@mui/material";
import PriorityHighOutlinedIcon from "@mui/icons-material/PriorityHighOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";

const CustomAlert = ({
  showAlert,
  hideAlert,
  title,
  text,
  errorType,
  showCancelButton,
  showConfirmButton,
  confirmButtonText,
  confirmPressed,
}) => {
  return (
    <Dialog
      open={showAlert}
      keepMounted
      onClose={hideAlert}
      aria-describedby="alert-dialog-slide-description"
      PaperProps={{ style: { width: "350px", paddingTop: "20px" } }}
    >
      <Box
        style={{
          height: "3.5rem",
          width: "4rem",
          display: "flex",
          alignSelf: "center",
          borderRadius: "50%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          style={{
            height: "100%",
            width: "100%",
            borderRadius: "50%",
            border:
              errorType == "error"
                ? "3px solid #F7A8A8"
                : errorType == "success"
                ? "3px solid #E4F5DA"
                : errorType == "warning"
                ? "3px solid #FACEA8"
                : errorType == "alert"
                ? "3px solid #FACEA8"
                : "",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {errorType == "error" ? (
            <ClearOutlinedIcon fontSize="large" style={{ color: "#F7A8A8" }} />
          ) : errorType == "success" ? (
            <CheckOutlinedIcon fontSize="large" style={{ color: "#A5DC86" }} />
          ) : errorType == "warning" ? (
            <PriorityHighOutlinedIcon
              fontSize="large"
              style={{ color: "#F7A8A8" }}
            />
          ) : errorType == "alert" ? (
            <PriorityHighOutlinedIcon
              fontSize="large"
              style={{ color: "#F7A8A8" }}
            />
          ) : (
            ""
          )}
        </Box>
      </Box>
      <DialogTitle
        style={{
          display: "flex",
          alignSelf: "center",
          fontFamily: "system-ui",
        }}
      >
        {title}
      </DialogTitle>
      <DialogContent style={{ display: "flex", justifyContent: "center", textAlign: 'center' }}>
        <DialogContentText
          id="alert-dialog-slide-description"
          style={{ fontFamily: "system-ui" }}
        >
          {text}
        </DialogContentText>
      </DialogContent>
      <DialogActions
        style={{ display: "flex", alignSelf: "center", marginBottom: "10px" }}
      >
        {showCancelButton && (
          <Button
            onClick={hideAlert}
            style={{
              width: "7rem",
              height: "20%",
              backgroundColor: "#655CC9",
              color: "white",
            }}
          >
            Cancel
          </Button>
        )}
        {showConfirmButton && (
          <Button
            onClick={confirmPressed}
            style={{
              width: "7rem",
              height: "20%",
              color: "white",
              backgroundColor: "#655CC9",
            }}
          >
            {confirmButtonText ?? "Ok"}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default CustomAlert;
