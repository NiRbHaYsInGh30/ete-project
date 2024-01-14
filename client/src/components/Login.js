import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const loginSignupToggle = () => {
    setIsLogin(!isLogin);
  };

  const [signupInputs, setSignupInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

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
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLogin) {
      console.log("signup");
      sendRequest("signup").then((data) => {
        localStorage.setItem("userId", data.user._id);
        window.location.href = "/";
        // naviagte("/");
      });
    } else {
      console.log("login");
      sendRequest("login").then((data) => {
        localStorage.setItem("userId", data.user._id);
        window.location.href = "/";
        // naviagte("/");
      });
    }
  };

  return (
    <div className="mx-[30rem] border rounded-md mt-3">
      <form onSubmit={handleSubmit}>
        <div className="rounded-md p-4 mt-3 flex flex-col justify-center items-center w-full">
          <h2 className="text-center text-2xl font-semibold">
            {!isLogin ? "Signup" : "Login"}
          </h2>
          {!isLogin && (
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={signupInputs.name}
              placeholder="Name"
              className="p-2 border rounded-md mt-2 outline-none min-w-72"
            />
          )}
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={signupInputs.email}
            placeholder="Email"
            className="p-2 border rounded-md mt-2 outline-none min-w-72"
          />
          <input
            name="password"
            className="p-2 border rounded-md mt-2 outline-none min-w-72"
            onChange={handleChange}
            value={signupInputs.password}
            type={"password"}
            placeholder="Password"
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-md bg-blue-600 text-white font-medium mt-4"
          >
            Submit
          </button>
          <button
            onClick={loginSignupToggle}
            className="px-4 py-2 rounded-md border mt-4"
          >
            Change To {!isLogin ? "Login" : "Signup"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
