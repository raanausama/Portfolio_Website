import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { inputLabelClasses } from "@mui/material/InputLabel";
import { Button, Grid, Typography } from "@mui/material";
import "./Contact.css";
import { Stack } from "@mui/system";

const Contact = () => {
  return (
    <Box
      component="form"
      sx={{
        padding: 25,
        paddingTop: 15,
        color: "#b4d9ef",
      }}
      noValidate
      autoComplete="off"
    >
      <Grid item sx={{ padding: 3 }}>
        <Stack spacing={2}>
          <Typography variant="H4">Contact me</Typography>
          <TextField
            sx={{ color: "#b9b4e0", width: "70ch", background: "black" }}
            label="Name"
            variant="filled"
            InputLabelProps={{
              sx: {
                color: "rgba(163, 163, 163, 0.738)",
                [`&.${inputLabelClasses.shrink}`]: {
                  color: "rgba(163, 163, 163, 0.738)",
                },
              },
            }}
          />
          <TextField
            sx={{ width: "70ch", background: "black", color: "white" }}
            label="Email"
            variant="filled"
            InputLabelProps={{
              sx: {
                color: "rgba(163, 163, 163, 0.738)",
                [`&.${inputLabelClasses.shrink}`]: {
                  color: "rgba(163, 163, 163, 0.738)",
                },
              },
            }}
          />
          <TextField
            sx={{ width: "70ch", background: "black", color: "white" }}
            label="Message"
            variant="filled"
            InputLabelProps={{
              sx: {
                color: "rgba(163, 163, 163, 0.738)",
                [`&.${inputLabelClasses.shrink}`]: {
                  color: "rgba(163, 163, 163, 0.738)",
                },
              },
            }}
            multiline
            rows={4}
          />
          <Button
            sx={{ width: "5ch", color: "white", borderColor: "#1f1f38" }}
            variant="contained"
          >
            Send
          </Button>
        </Stack>
      </Grid>
    </Box>
  );
};

export default Contact;
