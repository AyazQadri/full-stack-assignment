import React, { useState } from "react";
import "../Calculator/Calculator.css";
import FullStackLogo from "../../Assets/logo/fullstacklogo.svg";
import Tabs from "../Atoms/Tabs/Tabs";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import axios from 'axios';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};



const Calculator = () => {
  const navigate = useNavigate();
  const [methods, setMethods] = useState();
  const [result, setResult] = useState()
  const [number, setNumber] = useState({
    one: '',
    two: ''

  })
  
  const baseURL = "http://localhost:3000"

  const Endpoints = {
    addition: "/add/",
    subtrction: "/subtract/",
    mutiplication: "/multiply/"
  }

  
  const handleTextFieldOnChange = (e) => {
    const { name, value } = e.target;
    setNumber({ ...number, [name]: value });
  }


  const handleCalculateFunc = () => {
    if (methods == "Addition"){
      const completeURL = baseURL + Endpoints.addition + number.one + "/" + number.two;
      axios.get(completeURL).then((response) => {
        console.log(response, 'api success')
        setResult(response.data)
      }).catch((error) => {
        console.log(error, 'addition api error console')
      })
    } else if (methods == "Subtraction"){
      const completeURL = baseURL + Endpoints.subtrction + number.one + "/" + number.two;
      axios.get(completeURL).then((response)=> {
        console.log(response, 'subtratton api response')
        setResult(response?.data)
      }).catch((error) => {
        console.log(error, 'subtraction api error console')
      })
    } else if (methods == "Multiplication"){
      const completeURL = baseURL + Endpoints.mutiplication + number.one + "/" + number.two;
      axios.get(completeURL).then((response) => {
        console.log( 'division response'. response)
        setResult(response?.data)
      }).catch((error) => {
        console.log(error, 'multiplication api error console')
      })
    }
  }

  return (
    <div className="calculator_main_div">
      <div className="calculator_sub_main">
        <div className="calculator_back_icon_div">
          <ArrowBackIosNewIcon
            style={{ fontSize: "1.5rem" }}
            onClick={() => navigate(-1)}
          />
        </div>
        <div className="calculator_image_container">
          <img src={FullStackLogo} alt="" className="calculator_logo_css" />
        </div>
        <div className="calculator_welcome_back_signin_div">
          Welcome back <br />
          to Development Environment
        </div>
        <div className="number_input_field_div">
          <input
            type="tel"
            value={number?.one}
            name="one"
            placeholder="Enter First Number"
            className="number_input_field_css"
            onChange={(e) => handleTextFieldOnChange(e)}
          />
        </div>
        <div className="second_input_field_div">
          <input
            type="tel"
            value={number?.two}
            name="two"
            placeholder="Enter Second Number"
            className="number_input_field_css"
            onChange={(e) => handleTextFieldOnChange(e)}
          />
        </div>
        <FormControl
          sx={{ m: 1, width: "80%", marginTop: "2rem" }}
          size="small"
        >
          <InputLabel id="demo-multiple-chip-label">Select Method</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            value={methods}
            onChange={(e) => setMethods(e.target.value)}
            input={
              <OutlinedInput id="select-multiple-chip" label="Select Method" />
            }
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                <Chip key={methods} label={methods} />
              </Box>
            )}
            MenuProps={MenuProps}
          >
            <MenuItem value={"Addition"}>Addition</MenuItem>
            <MenuItem value={"Subtraction"}>Subtraction</MenuItem>
            <MenuItem value={"Multiplication"}>Multiplication</MenuItem>
          </Select>
        </FormControl>
       {result && <Box style={{ width: "80%", fontSize: 'large', display: 'flex', justifyContent: 'flex-start' }}>
        Output is: <span style={{ paddingLeft: '1rem', fontWeight: 600  }}>{result}</span>
        </Box>}
        <Box
          style={{
            width: "80%",
            display: "flex",
            alignSelf: "center",
            justifyContent: "flex-end",
          }}
        >
          <Button
            style={{
              backgroundColor: "#7665cf",
              borderRadius: "10px",
              width: "50%",
              marginTop: "1rem",
              color: "white",
            }}
            onClick={() => handleCalculateFunc()}
          >
            Calculate
          </Button>
        </Box>
        <div className="calculator_text_tab_screen">
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

export default Calculator;
