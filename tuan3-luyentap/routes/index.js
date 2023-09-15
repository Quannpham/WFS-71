import { Router } from "express";
import SubjectsRouter from "./subjects.js";

const RootRouter = Router();

RootRouter.use("/subjects",SubjectsRouter)

export default RootRouter;