import express from "express";
import mongoose from "mongoose";
import RestaurantModel from "./Models/restaurant.js";

const PORT = 8888;
const app = express();

/*
  Database

  Collection
  Document
  Schema
*/

mongoose.connect("mongodb://127.0.0.1:27017/web71");

app.get("/api/v1/getData", async (req, res) => {
  try {
    const data = await RestaurantModel.find({
      "address.zipcode": "11209",
    });
    res.status(200).send({
      message: "Thanh cong",
      data: data,
    });
  } catch (error) {
    res.send({
      message: error.message,
    })
  }
});

app.get("/api/v1/getCuisine", async (req, res) =>{
  const data = await RestaurantModel.find({
    "cuisine":"American"
  });
  res.status(200).send({
    message: "Thanh cong",
    data: data,
  });
});

app.get("/api/v1/getBorough", async (req, res) =>{
  const data = await RestaurantModel.find({
    "borough":"Brooklyn"
  });
  res.status(200).send({
    message: "Thanh cong",
    data: data,
  });
});

app.get("/api/v1/getStreet", async (req, res) => {
  const data = await RestaurantModel.find({
    "address.street": "Wall Street",
  });
  res.status(200).send({
    message: "Thanh cong",
    data: data,
  });
});

app.get("/api/v1/getRate", async (req, res) => {
  const data = await RestaurantModel.find({
    "rates.rate": "B",
  });
  res.status(200).send({
    message: "Thanh cong",
    data: data,
  });
});

app.get("/api/v1/getScore", async (req, res) => {
  const data = await RestaurantModel.find({
    "rates.score": "10",
  });
  res.status(200).send({
    message: "Thanh cong",
    data: data,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
