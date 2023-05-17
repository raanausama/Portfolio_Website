import React from "react";
import "./Main.css";
import Skills from "../../components/skills/Skills";
import Header from "../../components/Header/Header";
import Projects from "../../components/Projects/Projects";
import Footer from "../../components/Footer/Footer";
import About from "../../components/about/About";
import Experience from "../../components/Experience/Experience";
import Contact from "../../components/Contact/Contact";
import { Box } from "@mui/material";
import { Container } from "@mui/system";
const Main = () => {
  return (
    <>
      <Box className="box_background">
        <Header />
      </Box>
      <Box className="box_background">
        <Container>
          <About />
          <Skills />
          <Box padding={3}>
            <Projects />
          </Box>
          <Experience />
          <Contact />
        </Container>
        <Footer />
      </Box>
    </>
  );
};

export default Main;
