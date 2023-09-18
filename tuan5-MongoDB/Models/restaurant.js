import mongoose, { Schema } from "mongoose";

const restaurantSchema = new mongoose.Schema();

const RestaurantModel = mongoose.model("restaurants",restaurantSchema);

export default RestaurantModel;