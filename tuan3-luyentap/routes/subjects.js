import { Router } from "express";
import subjectsMiddlewares from "../middlewares/subjects.js";
import subjectsController from "../controllers/subjects.js";

const SubjectsRouter = Router();

SubjectsRouter.get(
  "",
  subjectsMiddlewares.isValidAuth,
  subjectsController.getDataSubject
);

SubjectsRouter.post("/subjects", (req, res) => {
  const { newValue } = req.body;
  if (!newValue) {
    res.send({
      message: "cung cap gia tri moi",
    });
  } else {
    data.push(newValue);
    res.send({
        message:"thanh cong",
        newValue,
    })
  }
});

export default SubjectsRouter;
