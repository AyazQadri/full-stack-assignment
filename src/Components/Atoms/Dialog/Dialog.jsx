import React,{ useState } from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const PasswordDialog = ({ showPopup, hidePopup, email, dataOnChange, submilClick }) => {
  return (
    <div>
    <Dialog open={showPopup} onClose={hidePopup}
    PaperProps={{ style: { borderRadius: 10, width: "350px" }}}
    >
      <DialogTitle>Change Password</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          id="name"
          label="Enter your registered Email"
          type="text"
          fullWidth
          variant="standard"
          name="email"
          value={email}
          onChange={(e) => dataOnChange(e)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={hidePopup}>Cancel</Button>
        <Button onClick={() => submilClick()}>Reset Password</Button>
      </DialogActions>
    </Dialog>
  </div>
  )
}

export default PasswordDialog