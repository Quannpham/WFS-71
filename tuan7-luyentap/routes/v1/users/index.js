import { Router } from "express";
import userController from "../../../controllers/users/index.js";

const UserRouter = Router();
UserRouter.post("",userController.create);

export default UserRouter;