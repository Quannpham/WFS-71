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

app.get("/api/v1/restaurants/getData", async (req, res) => {
  try {
    const { zipcode } = req.query;
    const data = await RestaurantModel.find({
      "address.zipcode": zipcode,
    });
    res.status(200).send({
      message: "Thanh cong",
      data: data,
    });
  } catch (error) {
    res.send({
      message: error.message,
    });
  }
});

app.get("/api/v1/restaurants/getCuisine", async (req, res) => {
  const{cuisine} = req.query;
  const data = await RestaurantModel.find({
    "cuisine": {
      $regex: cuisine,
      $options: "American"
    },
  });
  res.status(200).send({
    message: "Thanh cong",
    data: data,
  });
});

app.get("/api/v1/restaurants/getBorough", async (req, res) => {
  const {borough} = req.query;
  const data = await RestaurantModel.find({
    "borough": borough,
  });
  res.status(200).send({
    message: "Thanh cong",
    data: data,
  });
});

app.get("/api/v1/restaurants/getStreet", async (req, res) => {
  const {street} = req.query;
  const data = await RestaurantModel.find({
    "address.street": street,
  });
  res.status(200).send({
    message: "Thanh cong",
    data: data,
  });
});

app.get("/api/v1/restaurants/getFood", async (req, res) => {
  const{food} = req.query;
  const data = await RestaurantModel.find({
    "chicken": "chicken",
  });
  res.status(200).send({
    message: "Thanh cong",
    data: data,
  });
});

app.get("/api/v1/restaurants/getRate", async (req, res) => {
  const data = await RestaurantModel.find({
    "rates.rate": "B",
  });
  res.status(200).send({
    message: "Thanh cong",
    data: data,
  });
});

app.get("/api/v1/restaurants/getComment", async (req, res) => {
  const {grades} = req.query;
  const data = await RestaurantModel.find({
    "grades":{
      $gt:{
        $size:Number(grades)
      }
    },
  });
  res.status(200).send({
    message: "Thanh cong",
    data: data,
  });
});

app.get("/api/v1/restaurants/getScore", async (req, res) => {
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
