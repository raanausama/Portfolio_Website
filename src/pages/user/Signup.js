import React from "react";
import { useState } from "react";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Box from "@mui/material/Box";
import { Button, Container, TextField } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
  });

  const { email, password, name } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/auth/register", {
        name,
        email,
        password,
      });
      console.log(name, email, password);
      console.log(response);
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        setAuth(true);
        toast.success("Registered Sucessfully");
        <ToastContainer />;
      } else {
        setAuth(false);
        toast.error(response);
        <ToastContainer />;
      }
    } catch (err) {
      console.error(err.message);
      toast.error(err.response.data);
      <ToastContainer />;
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ToastContainer />

        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <AccountCircleIcon />
        </Avatar>
        <h1 className="text-center my-5" style={{ color: "black" }}>
          Sign up
        </h1>
        <form onSubmit={onSubmitForm}>
          <TextField
            margin="normal"
            type="text"
            name="name"
            placeholder="name"
            className="form-control my-3"
            value={name}
            onChange={(e) => onChange(e)}
          />
          <TextField
            margin="normal"
            type="email"
            name="email"
            placeholder="email"
            className="form-control my-3"
            value={email}
            onChange={(e) => onChange(e)}
          />
          <TextField
            margin="normal"
            type="password"
            name="password"
            placeholder="password"
            className="form-control my-3"
            value={password}
            onChange={(e) => onChange(e)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
          <Grid item>
            <Link to="/auth/login">Already have an account? Login</Link>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default Signup;

// import React from "react";
// import createRoot from "react-dom";
// import { useFormik } from "formik";
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
// import { Grid, responsiveFontSizes } from "@mui/material";
// import axios from "axios";
// import { Container, Box } from "@mui/material";
// import { Typography } from "@mui/material";
// import { Avatar } from "@mui/material";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import { Link } from "react-router-dom";

// const Signup = ({ setAuth }) => {
//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       email: "",
//       password: "",
//     },
//     onSubmit: async (values) => {
//       values.preventDefault();
//       try {
//         const response = await axios.post(
//           `http://localhost:3001/auth/register`,
//           {
//             name: values.name,
//             email: values.email,
//             password: values.password,
//           }
//         );
//         console.log("values", values);
//         if (response.data.token) {
//           localStorage.setItem("token", response.data.token);
//           setAuth(true);
//         } else {
//           setAuth(false);
//         }
//       } catch (err) {
//         console.error(err.message);
//       }

//       // const res1 = await axios.get("http://localhost:3001/users");
//       // const sortedUsers = res1.data.sort((a, b) => b.user_id - a.user_id);
//       // const latestUserId = sortedUsers[0].user_id;
//       // console.log("Latest user ID:", latestUserId);
//       // console.log("User ID:", values.userId);
//       // //   window.location.href = `http://localhost:3000/projects/${latestUserId}`;
//     },
//   });
//   return (
//     <>
//       <Container maxWidth="xs">
//         <Box
//           sx={{
//             marginTop: 8,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign up
//           </Typography>
//           <Box component="form" noValidate sx={{ mt: 3 }}>
//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <TextField
//                   autoComplete="given-name"
//                   type="name"
//                   name="name"
//                   required
//                   fullWidth
//                   id="name"
//                   label="Full Name"
//                   value={formik.values.name}
//                   onChange={formik.handleChange}
//                   // error={formik.touched.name && Boolean(formik.errors.name)}
//                   // helperText={formik.touched.name && formik.errors.name}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   type="email"
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   autoComplete="email"
//                   value={formik.values.email}
//                   onChange={formik.handleChange}
//                   // error={formik.touched.email && Boolean(formik.errors.email)}
//                   // helperText={formik.touched.email && formik.errors.email}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   type="password"
//                   id="password"
//                   label="Password"
//                   name="password"
//                   autoComplete="password"
//                   value={formik.values.password}
//                   onChange={formik.handleChange}
//                   // error={
//                   //   formik.touched.password && Boolean(formik.errors.email)
//                   // }
//                   // helperText={formik.touched.password && formik.errors.email}
//                 />
//               </Grid>
//             </Grid>
//             <Button
//               style={{ marginTop: 10, marginBottom: 5 }}
//               color="primary"
//               variant="contained"
//               type="submit"
//               fullWidth
//             >
//               Signup
//             </Button>
//             {/* <Link to="/login">Login</Link> */}
//           </Box>
//         </Box>
//       </Container>
//     </>
//   );
// };
// createRoot.render(<Signup />, document.getElementById("root"));
// export default Signup;
