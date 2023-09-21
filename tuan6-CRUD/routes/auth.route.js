import express from "express";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const userMockData = [
  {
    id: 1,
    email: "bigdaddy@gmail.com",
    password: "123456",
    fullname: "bigdaddy",
  },
  {
    id: 2,
    email: "andree@gmail.com",
    password: "123456",
    fullname: "andree",
  },
  {
    id: 3,
    email: "karik@gmail.com",
    password: "123456",
    fullname: "karik",
  },
];

router.post('/login', (req, res) => {
    const { email, password } = req.body || {};
  
    // 1.Validation request body
    if (!email || !password) {
      return res.status(400).json({
        message: 'Missing required keys',
      });
    }
  
    const existingUser = userMockData.find(
      (u) => u.email === email && u.password === password
    );
  
    if (!existingUser) {
      return res.json({
        message: 'Email or password does not correct',
      });
    }
  
    // Phát hành 1 tấm vé (accessToken) bằng JSON Web Token
    const payload = {
      id: existingUser.id,
      email: existingUser.email,
      fullname: existingUser.fullname,
    };
    const SECRET_KEY = process.env.SECRET_KEY;
  
    const token = jwt.sign(payload, SECRET_KEY, {
      expiresIn: process.env.JWT_EXPIRES_TIME, // 5 minutes
    });
  
    res.json({
      message: 'Login successfully',
      accessToken: token,
    });
  });
  
  router.post('/signup', (req, res) => {
    const { email, password, fullname } = req.body;
  
    // 1. Validation
    if (!(email && password && fullname)) {
      return res.status(400).json({
        message: 'Missing required keys',
      });
    }
  
    // 2. Check duplicate
    const existingUser = userMockData.find((u) => u.email === email);
  
    if (existingUser) {
      return res.status(400).json({
        message: 'Email is already taken',
      });
    }
  
    // 3. Create new user
    const newUser = {
      email,
      password,
      fullname,
      id: uuidv4(),
    };
  
    // 4. Add to database
    userMockData.push(newUser);
  
    // 5. Response to client
    res.status(201).json({
      message: 'User has been created successfully',
    });
  });
export default router;
