import express from "express";
import colors from "colors";
import nodemon from "nodemon";
import dotenv from "dotenv";
import mongoDBconnect from "./config/mongoDB.js";
import userRouter from "./routes/user.js";
import errorHandler from "./middlewares/errorHandler.js";

// initialization
const app = express();
dotenv.config();

// environment vari
const PORT = process.env.PORT || 9090;

// set middlewers
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// static folder
app.use(express.static("public"));

// routing
app.use("/api/v1/user", userRouter);

// error handler
app.use(errorHandler);

// app listen
app.listen(PORT, () => {
  mongoDBconnect();
  console.log(`server is running port: ${PORT}`.bgGreen.black);
});
