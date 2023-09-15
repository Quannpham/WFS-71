import { listSubject } from "../index.js";

const subjectsController = {
    getDataSubject:
        (req, res) => {
            try {
              const { auth } = req.query;
              switch (auth) {
                case "STUDENT":
                  res.status(200).send({
                    message: "Thanh cong",
                    data: [...listSubject].map((item) => {
                      const newItem = {
                        ...item,
                      };
                      delete newItem.avg;
                      return newItem;
                    }),
                  });
                  break;
                case "TEACHER":
                  res.status(200).send({
                    message: "Thanh cong",
                    data: listSubject,
                  });
                  break;
              }
            } catch (error) {
              res.status(403).send({
                message: error.message,
                data: null,
              });
            }
    }
};

export default subjectsController;