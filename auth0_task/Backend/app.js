const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const Router = require("./Routes/authRoutes");

app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use("/auth/v1", Router);

app.listen(3000, () => {
  console.log("Server started");
});
