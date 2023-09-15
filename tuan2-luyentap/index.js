import express from "express";
const app = express();

app.use(express.json());

const data = [10, 20, 30, 40, 50, 60, 3, 4, 5, 6, 7];

// app.get("/data/:index", (req, res) => {
//   const { index } = req.params;
//   res.send({
//     message: "Thanh cong",
//     data: data[index] ? data[index] : null,
//   });
// });

// app.get("/data/:index/:newValue", (req, res) => {
//   const { index, newValue } = req.params;
//   if (!index && !newValue) {
//     res.send({
//       message: "Tai khoan mat khau khong ton tai",
//     });
//   } else {
//     res.send("");
//   }
// });

app.get("/data", (req, res) => {
  const { option } = req.query;
  switch (option) {
    case "NH10":
      res.send({
        message: "Thanh cong",
        data: data.filter((item) => item < 10),
      });
      break;

    case "LH10":
      res.send({
        message: "Thanh cong",
        data: data.filter((item) => item > 10),
      });
      break;

    default:
      res.send({
        message: "Thanh cong",
        data,
      });
      break;
  }
});

app.post("/data", (req, res) => {
  const { newValue } = req.body;
  if (!newValue) { 
    res.send({
      message: "Hay cung cap gia tri moi",
    });
  } else {
    data.push(newValue);
    res.send({
      message: "Thanh cong",
      newValue,
    });
  }
});

app.listen(4001, () => {
  console.log("Server is running");
});
