import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const naviagte = useNavigate();

  const [isLogin, setIsLogin] = useState(true);

  const loginSignupToggle = () => {
    setIsLogin(!isLogin);
  };

  const [signupInputs, setSignupInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  // const [isSignup, setIsSignup] = useState(false);
  const handleChange = (e) => {
    setSignupInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async (type) => {
    const res = await axios
      .post(`http://localhost:5000/api/users/${type}`, {
        name: signupInputs.name,
        email: signupInputs.email,
        password: signupInputs.password,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    console.log("request data: ", data);
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupInputs);
    if (!isLogin) {
      console.log("signup");
      sendRequest("signup")
        .then((data) => localStorage.setItem("userId", data.user._id))
        .then(() => naviagte("/blogs"));
    } else {
      console.log("login");
      sendRequest("login")
        .then((data) => localStorage.setItem("userId", data.user._id))
        .then(() => naviagte("/blogs"));
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          maxWidth={400}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin="auto"
          marginTop={5}
          borderRadius={5}
        >
          <Typography variant="h2" padding={3} textAlign="center">
            {!isLogin ? "Signup" : "Login"}
          </Typography>
          {!isLogin && (
            <TextField
              name="name"
              onChange={handleChange}
              value={signupInputs.name}
              placeholder="Name"
              margin="normal"
            />
          )}{" "}
          <TextField
            name="email"
            onChange={handleChange}
            value={signupInputs.email}
            type={"email"}
            placeholder="Email"
            margin="normal"
          />
          <TextField
            name="password"
            onChange={handleChange}
            value={signupInputs.password}
            type={"password"}
            placeholder="Password"
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ borderRadius: 3, marginTop: 3 }}
            color="warning"
          >
            Submit
          </Button>
          <Button
            onClick={loginSignupToggle}
            sx={{ borderRadius: 3, marginTop: 3 }}
          >
            Change To {!isLogin ? "Login" : "Signup"}
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Login;
