import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box } from "@mui/system";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import "./Footer.css";
import { Typography } from "@mui/material";

const Footer = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ color: "whitesmoke" }}>
      <BottomNavigation
        showlabels="true"
        value={value}
        sx={{ paddingTop: 3, paddingBottom: 15, background: "black" }}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction />
        <a
          href="https://www.linkedin.com/in/nashit-quddus-373388142/"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <LinkedInIcon sx={{ color: "white" }} />
        </a>
        <Typography>Nashit Quddus</Typography>
        <BottomNavigationAction />
        <EmailIcon sx={{ color: "white" }} />
        <Typography>nashitquddus1@gmail.com</Typography>
        <BottomNavigationAction />
        <BottomNavigationAction />
        <LocalPhoneIcon sx={{ color: "white" }} />
        <Typography>+923360690126</Typography>
        <BottomNavigationAction />
        <a
          href="https://github.com/Nashit2401"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <GitHubIcon sx={{ color: "white" }} />
        </a>
        <Typography>Nashit2401</Typography>

        <BottomNavigationAction />
      </BottomNavigation>
    </Box>
  );
};

export default Footer;
