import { CenterFocusStrong, Margin, Padding } from "@mui/icons-material";
import { Box, Button, Grid, Typography, Stack } from "@mui/material";
import { blue } from "@mui/material/colors";
import { height } from "@mui/system";
import React from "react";
import CV from "C:/Users/lapto/Desktop/portfolio--use-npm/src/assets/NashitCvnew-1.pdf";
import myImage from "C:/Users/lapto/Desktop/portfolio--use-npm/src/assets/profile.jpeg";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import "./Header.css";

const Item = styled(Paper)(({ theme }) => ({
  background: "#3A1C71" /* fallback for old browsers */,
  background:
    "-webkit-linear-gradient(to right, #414345, #232526)" /* Chrome 10-25, Safari 5.1-6 */,
  background:
    "linear-gradient(to right, #414345, #232526)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const onLogin = () => {
  const link = document.createElement("a");
  link.href = "http://localhost:3000/auth/register";
  link.click();
};

const onDownload = () => {
  const link = document.createElement("a");
  link.download = CV;
  link.href = CV;
  link.click();
};
const Header = () => {
  return (
    <>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <Button
              onClick={onLogin}
              sx={{ justifyContent: "flex-end" }}
              color="inherit"
            >
              Register
            </Button>
          </Toolbar>
        </AppBar>
        <Grid container sx={{ padding: 25, color: "#fffdd0" }}>
          <Grid
            item
            xs={8}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <Stack spacing={1}>
              <Typography
                variant="h5"
                display="flex"
                justifyContent="flex-start"
              >
                Hi I am
              </Typography>
              <Typography
                variant="h1"
                textTransform={"uppercase"}
                fontSize="5rem"
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                Nashit Quddus
              </Typography>
              <Typography
                variant="h3"
                // paddingLeft={55}
                textTransform={"uppercase"}
                color="00000074"
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                FullStack Developer
              </Typography>
              <Typography
                variant="h6"
                // paddingLeft={55}
                textTransform={"uppercase"}
                color="00000074"
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                I am a Fullstack developer from Islamabad, Pakistan
              </Typography>
              <Button
                variant="contained"
                onClick={onDownload}
                sx={{
                  color: "#fffdd0",
                  borderColor: "#b9b4e0",
                  maxWidth: "25ch",
                }}
              >
                Download CV
              </Button>
            </Stack>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <figure className="about">
              <img
                style={{
                  height: 300,
                  width: 250,
                  paddingBottom: 5,
                  borderRadius: "30px",
                }}
                src={myImage}
              ></img>
            </figure>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Header;
