import jwt from "jsonwebtoken";

const SECRET_KEY = "echo-hybird-99"
const EXPIREDTIME = 500;

const generateToken = (data) =>{
    const token = jwt.sign(data, SECRET_KEY, {
        expiresIn: EXPIREDTIME
    });
    return token;
}

const verifyToken = (token) => {
    const verify = jwt.verify(token, SECRET_KEY);
}

export {
    generateToken,
    verifyToken
}