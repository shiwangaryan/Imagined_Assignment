import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes";

// -- BASIC CONFIG
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
const mongouri = process.env.MONGOURI!;
app.use(express.json());

// -- ROUTES
app.use("/user", userRouter);
// app.use("/product");
// app.use("/orders");

// -- MONGOOSE CONNECT
const clientOptions = {
  dbName: "E-Commerce",
};

mongoose
  .connect(mongouri, clientOptions)
  .then(() => {
    console.log("connected to db");
    app.listen(port, () => {
      console.log(`server running on port: ${port}`);
    });
  })
  .catch((err) => {
    console.log(`err encountered: ${err}`);
  });
