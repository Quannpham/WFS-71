import express from "express";

const PORT = 8888;
const app = express();

app.get("/", (req, res) => {
  res.json({
    name: "quan",
    age: "23",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
