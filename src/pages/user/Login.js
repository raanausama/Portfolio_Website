import React, { useState } from "react";
import { Fragment } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button, Container, TextField } from "@mui/material";
import Box from "@mui/material/Box";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/auth/login", {
        email,
        password,
      });
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        setAuth(true);
        toast.success("Login Sucessfully");
        <ToastContainer />;
      } else {
        setAuth(false);
        toast.error("Registered unsucessfull");
        <ToastContainer />;
      }
    } catch (err) {
      console.error(err.message);
      toast.error(err.response.data);
      <ToastContainer />;
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "black",
        }}
      >
        <ToastContainer />
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <AccountCircleIcon />
        </Avatar>
        <h1 className="text-center my-5">Login</h1>
        <form onSubmit={onSubmitForm}>
          <TextField
            type="email"
            name="email"
            placeholder="email"
            className="form-control my-3"
            value={email}
            onChange={(e) => onChange(e)}
          />
          <TextField
            type="password"
            name="password"
            placeholder="password"
            className="form-control my-3"
            value={password}
            onChange={(e) => onChange(e)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          <Grid item>
            <Link to="/auth/register">Don't have an account yet? Sign up</Link>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
