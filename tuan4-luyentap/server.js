import express from "express";
import crypto from "crypto";

const app = express();
const PORT = 8888;

const users = [
    {
      id: 1,
      email: "bigdaddy@gmail.com",
      address: "ha noi",
      userName: "bigdaddy",
      numberPhone: "0123412567811",
      password: "1234567",
    },
    {
      id: 2,
      email: "andree@gmail.com",
      address: "hai phong",
      userName: "andree",
      numberPhone: "0123456780",
      password: "1234568",
    },
    {
      id: 3,
      email: "karik@gmail.com",
      address: "tp ho chi minh",
      userName: "karik",
      numberPhone: "01234567867",
      password: "1234569",
    },
];

app.post("/api/v1/login", (req, res) => {
  try {
    const { email, password } = req.body;
    const findUser = users.find(
      (item) => item.email === email && item.password === password
    );
    if (findUser) throw new Error("Sai tai khoan hoac mat khau");
    const token = generateToken({
      id: findUser.id,
      email: findUser.email,
    });
    res.status(200).send({
      message: "access granted",
      data: token,
    });
  } catch (error) {
    res.status(403).send({
      message: "access denied",
      data: null,
    });
  }
});

app.post("/api/v1/register", (req, res) => {
  try {
    const { email, password, address, userName, numberPhone } = req.body;
    const exitEmail = users.find((item) => {
      return item.email === email;
    });

    if (exitEmail) throw new Error("Email exist");

    const newUser = {
      email,
      password,
      address,
      userName,
      numberPhone,
      id: crypto.randomUUID(),
    };
    users.push(newUser);
    res.status(200).send({
      message: "Success",
      data: newUser,
    });
  } catch (error) {
    res.status(403).send({
      message: "Error",
      data: null,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
