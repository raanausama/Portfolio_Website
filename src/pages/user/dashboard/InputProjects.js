import React, { useEffect } from "react";
import { Fragment, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Container,
  Box,
  Grid,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import WorkIcon from "@mui/icons-material/Work";

const InputProjects = ({ setAuth }) => {
  console.log(setAuth);
  console.log("here");
  const [project1, setProject1] = useState("");
  const [project2, setProject2] = useState("");
  const [project3, setProject3] = useState("");
  const [description1, setDescription1] = useState("");
  const [description2, setDescription2] = useState("");
  const [description3, setDescription3] = useState("");
  //   const [allProjects, setAllProjects] = useState([]);
  //   console.log(description1);
  const navigate = useNavigate();

  const onDashboard = async (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setAuth(false);
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = {
        project1,
        description1,
        project2,
        description2,
        project3,
        description3,
      };
      const myHeaders = {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),

      };
      const response = await axios.post(
        "http://localhost:3001/dashboard/projects",
        body,
        {
          headers: myHeaders,
        }
      );
      //   console.log(response);
      //   setAllProjects(response.data);
    } catch (err) {
      console.error(err.message);
    }
  };
  //   useEffect(() => {}, [allProjects]);
  return (
    <Container component="main" maxWidth="md" sx={{ margin: "2" }}>
      <Box
        sx={{
          margin: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "black",
        }}
      >
        <Avatar sx={{ bgcolor: "secondary.main" }}>
          <WorkIcon />
        </Avatar>
        <Typography variant="h4" sx={{ margin: 3, color: "black" }}>
          Projects
        </Typography>
        <Typography variant="h5" sx={{ margin: 3, color: "black" }}>
          Please enter your top 3 projects
        </Typography>
        <form style={{ color: "black" }} onSubmit={onSubmitForm}>
          <TextField
            type="text"
            fullWidth
            placeholder="Add first project"
            className="form-control"
            sx={{ mb: 2 }}
            value={project1}
            onChange={(e) => setProject1(e.target.value)}
          />
          <TextField
            type="text"
            placeholder="Add first project's description"
            className="form-control"
            sx={{ mt: 2, mb: 2 }}
            value={description1}
            onChange={(e) => setDescription1(e.target.value)}
          />
          <TextField
            type="text"
            placeholder="Add second project"
            className="form-control"
            value={project2}
            onChange={(e) => setProject2(e.target.value)}
            sx={{ mt: 2, mb: 2 }}
          />
          <TextField
            type="text"
            placeholder="Add second project's description"
            className="form-control"
            sx={{ mt: 2, mb: 2 }}
            value={description2}
            onChange={(e) => setDescription2(e.target.value)}
          />
          <TextField
            type="text"
            placeholder="Add third project"
            className="form-control"
            sx={{ mt: 2, mb: 2 }}
            value={project3}
            onChange={(e) => setProject3(e.target.value)}
          />
          <TextField
            type="text"
            placeholder="Add third project's description"
            className="form-control"
            sx={{ mt: 2, mb: 1 }}
            value={description3}
            onChange={(e) => setDescription3(e.target.value)}
          />
          <Button
            color="success"
            type="submit"
            variant="contained"
            sx={{ margin: 2 }}
          >
            submit
          </Button>
          <Button
            type="submit"
            variant="contained"
            sx={{ margin: 2 }}
            onClick={onDashboard}
          >
            Dashboard
          </Button>
          <Button
            type="submit"
            color="error"
            variant="contained"
            sx={{ margin: 2 }}
            onClick={(e) => logout(e)}
          >
            Logout
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default InputProjects;
