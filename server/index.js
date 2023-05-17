const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

//routes

//register routes
app.use("/auth", require("./routes/jwtauth"));

app.use("/dashboard", require("./routes/dashboard"));

app.listen(3001, () => {
  console.log(`listening to port 3001`);
});
