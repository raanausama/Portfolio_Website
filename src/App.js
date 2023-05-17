import * as React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Main from "./pages/main/Main";
import Login from "./pages/user/Login";
import Signup from "./pages/user/Signup";
import { useState, useEffect } from "react";
import axios from "axios";
import Dashboard from "./pages/user/Dashboard";
import InputProjects from "./pages/user/dashboard/InputProjects";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const setAuth = (Boolean) => {
    setIsAuthenticated(Boolean);
  };
  console.log("here", isAuthenticated);

  const verify = {
    headers: {
      token: localStorage.token,
    },
  };

  async function isAuth() {
    try {
      const response = await axios.get(
        "http://localhost:3001/auth/isverify",
        verify
      );
      console.log(response);
      response.data === true
        ? setIsAuthenticated(true)
        : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    isAuth();
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={!isAuthenticated ? <Main /> : <Navigate to="/dashboard" />}
          />
          <Route
            path="/auth/login"
            element={
              !isAuthenticated ? (
                <Login setAuth={setAuth} />
              ) : (
                <Navigate to="/add-projects" />
              )
            }
          />
          <Route
            path="/auth/register"
            element={
              !isAuthenticated ? (
                <Signup setAuth={setAuth} />
              ) : (
                <Navigate to="/auth/login" />
              )
            }
          />
          <Route
            path="/add-projects"
            element={
              isAuthenticated ? (
                <InputProjects setAuth={setAuth} />
              ) : (
                <Navigate to="/auth/login" />
              )
            }
          />
          <Route
            path="/dashboard"
            element={
              isAuthenticated ? (
                <Dashboard setAuth={setAuth} />
              ) : (
                <Navigate to="/auth/login" />
              )
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
