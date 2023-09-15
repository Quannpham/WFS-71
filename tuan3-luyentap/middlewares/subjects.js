const subjectsMiddlewares = {
    isValidAuth:(req, res, next) => {
        try {
          const { auth } = req.query;
          if (!auth || (auth !== "STUDENT" && auth !== "TEACHER"))
            throw new Error("Access denied");
          next();
        } catch (error) {
          res.status(403).send({
            message: error.message,
            data: null,
          });
        }
      }
}

export default subjectsMiddlewares;