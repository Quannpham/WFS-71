import express from "express";

const app = express();
const PORT = 3001;

const posts = [
  {
    id: 1,
    title: "right",
    description: "rapviet",
    author: "andree",
  },
  {
    id: 2,
    title: "height",
    description: "the masksingged",
    author: "toc tien",
  },
  {
    id: 3,
    title: "miu",
    description: "vietnam idol",
    author: "tu anh",
  },
];

app.get("/", (req, res) => {
  res.send("Welcome to server hack");
});

app.get("/admin", (req, res) => {
  res.send("Welcome to server admin");
});

app.get("/darkweb", (req, res) => {
  res.send("Nothing in here");
});

app.get("/node", (req, res) => {
  res.send("Christopher Nolan");
});

app.get("/user", (req, res) => {
  res.json([
    {
      name: "Quan",
      age: 23,
    },
    {
      name: "Van",
      age: 20,
    },
    {
      name: "Tra",
      age: 21,
    },
    {
      name: "Tuan",
      age: 22,
    },
  ]);
});

app.get("/posts", (req, res) => {
  console.log("API is coming");
  res.json({
    data: posts,
  });
});

app.get("/posts/:id", (req, res) => {});

app.post("/posts", (req, res) => {
    
});

app.listen(PORT, () => {
  console.log(`server is running at PORT ${PORT}`);
});

/* 
    HTTP methods
    RESTful api
 */
