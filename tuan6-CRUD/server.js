import express from "express";
import mongoose from "mongoose";
import appRouter from './routes/index.js';
import apiLoggerMiddleware from './middlewares/apiLogger.mdw.js';
import { connectToDatabase } from "./config/database.js";
import cors from "cors";
import 'dotenv/config.js';

const PORT = 8888;
const app = express();

connectToDatabase();

app.use(express.json());
app.use(cors("*"));
app.use(apiLoggerMiddleware);


app.use('/api/v1', appRouter);

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
