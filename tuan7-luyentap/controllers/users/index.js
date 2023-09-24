import userModel from "../../models/users.js";
import hashingPassword from "../../utils/index.js";

const userController = {
   async create(req,res){
        try {
            const data = req.body;
            const hashedPassword = hashingPassword(data.password);
            data.password = hashedPassword.password;
            const newUser = await userModel.create(data);
            res.status(201).send({
                message: "Dang ky thanh cong",
                data: data,
                success:true
            });
        } catch (error) {
            res.status(403).send({
                message:error.message,
                data:null,
                success:false
            })
        }
    },
    async login(req, res){
        try {
            const {email, password} =req.body;
            const currentUser = await userModel.findOne({
                email    
            });
            if(!currentUser) throw new Error("Sai tai khoan hoac mat khau")
                const validatePassword = (password, currentUser.password, currentUser.salt)
            if(!validatePassword) throw new Error("Sai tai khoan hoac mat khau")
            res.status(200).send({
                message:"Dang nhap thanh cong",
                data: currentUser,
                success:true,
            })
        } catch (error) {
            res.status(403).send({
                message:error.message,
                data:null,
                success:false
            })
        }
    }
}
export default userController