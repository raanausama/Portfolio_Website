import { Box, Grid, Typography } from "@mui/material";
import { height, padding, width } from "@mui/system";
import React from "react";
import myImage from "C:/Users/lapto/Desktop/portfolio--use-npm/src/assets/PngItem_6716032.png";
import "./About.css";

const About = () => {
  return (
    <>
      <Box
        sx={{
          paddingTop: 2,
          paddingBottom: 20,
        }}
      >
        <Grid
          item
          xs={6}
          sm={5}
          md={4}
          lg={3}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        ></Grid>
        <Grid item md={4}>
          <Typography
            variant="h4"
            sx={{ textDecoration: "underline", paddingTop: 2 }}
          >
            About
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontSize: 20,
              paddingTop: 2,
              color: "rgba(255,255,255,0.4)",
            }}
          >
            As a full-stack developer, I possess a comprehensive set of skills
            and expertise in both front-end and back-end web development. With a
            deep understanding of programming languages and frameworks. I am
            able to design, build, and maintain web applications that meet
            business requirements. I am highly collaborative and enjoy working
            with other developers, designers, and stakeholders to ensure that
            the web application's user interface is user-friendly, responsive,
            and accessible. With a strong problem-solving ability, analytical
            skills, and attention to detail, I am able to create scalable,
            robust, and efficient web applications that deliver a seamless user
            experience. I am also committed to staying up-to-date with the
            latest trends and technologies in web development to ensure that I
            remain competitive in the industry.
          </Typography>
        </Grid>
      </Box>
    </>
  );
};

export default About;
