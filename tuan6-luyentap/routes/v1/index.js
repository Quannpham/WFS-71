import { Router } from "express";
import restaurants from "./restaurants";

// localhost:8888/v1/restaurants

const RouterV1 = Router();
RouterV1.use("/restaurants",restaurants)

export default RouterV1;