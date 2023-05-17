import React from "react";
import createRoot from "react-dom";
import { useFormik } from "formik";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Grid } from "@mui/material";
import axios from "axios";


const UserPersonal = ({ setAuth }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      userId: "",
    },
    onSubmit: async (values) => {
      console.log("values", values.name);
      const res = await axios.post("http://localhost:3001/users", {
        name: values.name,
        email: values.email,
        user_id: values.userIduserId,
      });
      // const res1 = await axios.post("http://localhost:3001/projects", {
      //   id: values.id,
      //   name: values.name,
      //   email: values.email,
      // });
      const res1 = await axios.get("http://localhost:3001/users");
      const sortedUsers = res1.data.sort((a, b) => b.user_id - a.user_id);
      const latestUserId = sortedUsers[0].user_id;
      console.log("Latest user ID:", latestUserId);
      console.log("User ID:", values.userId);
      window.location.href = `http://localhost:3001/projects/${latestUserId}`;
    },
  });

  return (
    <Grid container>
      <Grid xs={3}>
        <form style={{ padding: 2 }} onSubmit={formik.handleSubmit}>
          <TextField
            style={{ width: 400 }}
            margin="normal"
            id="name"
            name="name"
            label="Full Name"
            variant="filled"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            style={{ width: 400 }}
            margin="normal"
            id="email"
            name="email"
            label="Email"
            variant="filled"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <Button
            style={{ marginTop: 10, marginBottom: 5, width: "10ch" }}
            color="primary"
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

createRoot.render(<UserPersonal />, document.getElementById("root"));

export default UserPersonal;
