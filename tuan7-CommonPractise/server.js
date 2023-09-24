import express from "express";
import mongoose from "mongoose";


const PORT = 8888;
const app = express();


app.use('/api/v1',(req, res) => {
  
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
