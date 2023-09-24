import { Router } from "express";
import restaurantsController from "../../controllers/restaurants";

// localhost:8888/v1/restaurants/

const restaurants = Router();
restaurants.get("/",restaurantsController)

export default restaurants;