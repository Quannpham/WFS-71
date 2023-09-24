import express from "express";
import mongoose from "mongoose";
import RootRouter from "./routes";

mongoose.connect("mongodb://127.0.0.1:27017/web72")
const PORT = 8888;
const app = express();

app.use(express.json());

app.use(RootRouter);

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});