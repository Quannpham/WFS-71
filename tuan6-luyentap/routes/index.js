import { Router } from "express";
import RouterV1 from "./v1/index.js";

// localhost:8888/v1
const AppRouter = Router(); 
AppRouter.use("v1/",RouterV1);

export default AppRouter

