import React, { useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config/firebase";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [password, setUserPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  useEffect(() => {
    setLoading(false);
  }, []);

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const user = await signInWithEmailAndPassword(auth, userEmail, password);
      await navigate("/Home");
      localStorage.setItem("userToken",user.user.accessToken)
      console.log(user);
      setLoading(false);
    } catch (err) {
      alert("No user found please SignIn");
      await navigate("Signup");
    }
  };
  return (
    <>
      {loading ? (
        <>
          <h1>Loading....</h1>
        </>
      ) : (
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
            }}
          >
            <Typography sx={{ fontSize: 20 }} gutterBottom>
              Employee and Admin Login
            </Typography>
            <TextField
              id="outlined-basic"
              placeholder="Email"
              variant="outlined"
              value={userEmail}
              sx={{
                width: "30%",
              }}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              placeholder="Password"
              value={password}
              variant="outlined"
              type={showPassword ? "text" : "password"}
              sx={{
                marginTop: "18px",
                width: "30%",
              }}
              onChange={(e) => setUserPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword}>
                      {showPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#00c853",
                marginTop: "18px",
              }}
              onClick={loginHandler}
            >
              Login
            </Button>
          </Card>
        </div>
      )}
    </>
  );
};

export default Login;
