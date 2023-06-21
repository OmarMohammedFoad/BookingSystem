import Users from "../models/Users.js"
import  bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken"
import * as dotenv from 'dotenv' 
dotenv.config()





export const  Registration = async(req,res,nxt)=>
{

        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.password, salt);
        const User = new Users({...req.body,password:hash});
        try {
            
            const newuser = await User.save()



            res.status(200).json(newuser); 
        } 
        catch(error)
        {
            nxt(error)
        }
    
    }







export  const Login = async(req,res,nxt)=>
{
    try {
        
    
    const user = await Users.findOne({username:req.body.username});
    if(!user)
    {
       return  res.status(404).json("user is not found");

    }

    const check_password = await bcrypt.compare(req.body.password,user.password);
    console.log(check_password);
    if(!check_password)
    {
        return res.status(400).json("the password is wrong");
    }


    const token = jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.JWT);
    const {password,isAdmin,...otherdetails} =  user._doc
    
    return res.cookie("access_token",token,{httpOnly: true}).status(200).json({"details" :otherdetails})
}
catch (error) 
{
        nxt(error);
    }
}