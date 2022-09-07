import React, { createRef, useState } from "react";
import {
  Typography,
  Card,
  TextField,
  Button,
  IconButton,
  InputAdornment,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config/firebase";
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const [userEmail, setUserEmail] = useState("");
  const [password, setUserPassword] = useState("");

  const navigate = useNavigate();

  const signUpOnClick = async (e) => {
    try {
      const user=await createUserWithEmailAndPassword(auth,userEmail,password)
      console.log(user);
      await navigate("/Login")

    }
    catch(err){
      console.log(err);
    }
  

  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "200px",
          height: "50vh",
          width: "50vw",
          border: "1px solid black",
          boxShadow: "8",
        }}
      >
        <Typography sx={{ fontSize: 20 }} gutterBottom>
          Employee and Admin Signup
        </Typography>
        <TextField
          id="outlined-basic"
          placeholder="Email"
          variant="outlined"
          sx={{
            width: "30%",
          }}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          placeholder="Password"
          variant="outlined"
          type={showPassword ? "text" : "password"}
          sx={{
            marginTop: "18px",
            width: "30%",
          }}
          InputProps={{
            // <-- This is where the toggle button is added.
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword}>
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          onChange={(e) => setUserPassword(e.target.value)}
        />

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#00c853",
            marginTop: "18px",
          }}
          onClick={signUpOnClick}
        >
          Signup
        </Button>
      </Card>
    </div>
  );
};

export default Signup;
