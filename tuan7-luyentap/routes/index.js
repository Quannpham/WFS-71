import { Router } from "express";
import V1Router from "./v1/index.js";

const RootRouter = Router();

RootRouter.use("/api/v1",V1Router);
// RootRouter.use("/api/v2");


export default RootRouter