import React from "react";
import createRoot from "react-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Grid } from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";

const validationSchema = yup.object({
  name: yup.string("Enter your full name"),
  // .required("Full name is required"),
  // .matches(
  // /^[a-zA-Z ]*$/,
  // "Only letters and spaces are allowed for full name"
  email: yup.string("Enter your email"),
  // .email("Enter a valid email")
  // .required("Email is required")
  projectName: yup.string("Enter your Project Name"),
  // .required("Project name is required"),
  about: yup.string("About field is must"),
  // .min(40, "Description should be of minimum 40 characters length"),
  // .required("About field is required"),
  description: yup.string("Enter your Project's Description"),
  // .min(40, "Description should be of minimum 40 characters length"),
  // .required("Description is required"),
});

const User = () => {
  const { user_id } = useParams();
  

  const formik = useFormik({
    initialValues: {
      // name: "",
      // email: "",
      about: "Write a paragraph about yourself",
      firstProjectName: "",
      description1: "",
      secondProjectName: "",
      description2: "",
      thirdProjectName: "",
      description3: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const res = await axios.post(`http://localhost:3001/projects`, {
        // name: values.name,
        // email: values.email,
        proj1: values.firstProjectName,
        proj2: values.secondProjectName,
        proj3: values.thirdProjectName,
        descrip1: values.description1,
        descrip2: values.description2,
        descrip3: values.description3,
        user_id: user_id,
      });
      // const res1 = await axios.post("http://localhost:3001/projects", {
      //   id: values.id,
      //   name: values.name,
      //   email: values.email,
      // });
      console.log("res", res);
    },
  });

  return (
    <Grid container>
      <Grid xs={3}>
        <form style={{ padding: 2 }} onSubmit={formik.handleSubmit}>
          {/* <TextField
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
          /> */}
          <TextField
            style={{ width: 500 }}
            margin="normal"
            id="about"
            name="about"
            label="About"
            type="text"
            variant="filled"
            value={formik.values.about}
            onChange={formik.handleChange}
            error={formik.touched.about && Boolean(formik.errors.about)}
            helperText={formik.touched.about && formik.errors.about}
            multiline
            maxRows={8}
          />
          <TextField
            style={{ width: 500 }}
            margin="normal"
            id="firstProjectName"
            name="firstProjectName"
            label="First Project"
            variant="filled"
            value={formik.values.projectName}
            onChange={formik.handleChange}
            error={
              formik.touched.firstProjectName &&
              Boolean(formik.errors.firstProjectName)
            }
            helperText={
              formik.touched.firstProjectName && formik.errors.firstProjectName
            }
          />
          <TextField
            style={{ width: 500 }}
            margin="normal"
            id="description1"
            name="description1"
            label="Description"
            type="text"
            variant="filled"
            value={formik.values.description1}
            onChange={formik.handleChange}
            error={
              formik.touched.description1 && Boolean(formik.errors.description1)
            }
            helperText={
              formik.touched.description1 && formik.errors.description1
            }
            multiline
            maxRows={8}
          />
          <TextField
            style={{ width: 500 }}
            margin="normal"
            id="secondProjectName"
            name="secondProjectName"
            label="Second Project"
            variant="filled"
            value={formik.values.projectName}
            onChange={formik.handleChange}
            error={
              formik.touched.projectName && Boolean(formik.errors.projectName)
            }
            helperText={
              formik.touched.secondProjectName &&
              formik.errors.secondProjectName
            }
          />
          <TextField
            style={{ width: 500 }}
            margin="normal"
            id="description2"
            name="description2"
            label="Description"
            type="text"
            variant="filled"
            value={formik.values.description2}
            onChange={formik.handleChange}
            error={
              formik.touched.description2 && Boolean(formik.errors.description2)
            }
            helperText={
              formik.touched.description2 && formik.errors.description2
            }
            multiline
            maxRows={8}
          />
          <TextField
            style={{ width: 500 }}
            margin="normal"
            id="thirdProjectName"
            name="thirdProjectName"
            label="Third Project"
            variant="filled"
            value={formik.values.thirdprojectName}
            onChange={formik.handleChange}
            error={
              formik.touched.thirdProjectName &&
              Boolean(formik.errors.thirdProjectName)
            }
            helperText={
              formik.touched.thirdprojectName && formik.errors.thirdProjectName
            }
          />
          <TextField
            style={{ width: 500 }}
            margin="normal"
            id="description3"
            name="description3"
            label="Description"
            type="text"
            variant="filled"
            value={formik.values.description3}
            onChange={formik.handleChange}
            error={
              formik.touched.description3 && Boolean(formik.errors.description3)
            }
            helperText={
              formik.touched.description3 && formik.errors.description3
            }
            multiline
            maxRows={8}
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

createRoot.render(<User />, document.getElementById("root"));

export default User;
