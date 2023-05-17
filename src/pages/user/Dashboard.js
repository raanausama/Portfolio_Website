import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//components
import { Fragment } from "react";
import ListProjects from "./dashboard/ListProjects";
import { Navigate } from "react-router-dom";
import { Box, Button, Container, Typography } from "@mui/material";

const Dashboard = ({ setAuth }) => {
  const [name, setName] = useState("");
  const [allProjects, setAllProjects] = useState([]);
  const [projectsChange, setProjectsChange] = useState(false);

  async function getName() {
    try {
      const config = {
        headers: {
          token: localStorage.getItem("token"),
        },
      };

      const response = await axios.get(
        "http://localhost:3001/dashboard",
        config
      );
      //   console.log(response.data);
      setAllProjects(response.data);
      setName(response.data[0].user_name);
    } catch (err) {
      console.error(err.message);
    }
  }
  const navigate = useNavigate();
  const onAddProjects = (e) => {
    e.preventDefault();
    navigate("/add-projects");
  };

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setAuth(false);
  };

  useEffect(() => {
    getName();
    setProjectsChange(false);
  }, [projectsChange]);

  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "black",
        }}
      >
        <Typography variant="h4" style={{ color: "black" }}>
          {name}'s List of Projects
        </Typography>

        <ListProjects />

        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={onAddProjects}
        >
          Add Projects
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="error"
          sx={{ mt: 3, mb: 2 }}
          onClick={(e) => logout(e)}
        >
          Logout
        </Button>
      </Box>
    </Container>
  );
};

export default Dashboard;
