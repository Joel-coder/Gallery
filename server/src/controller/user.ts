import { Request, Response } from 'express';
import { IUser } from "../interfaces/user";
import  User  from "../models/user";
import  jwt from "jsonwebtoken";
import { hashSync ,compareSync } from "bcrypt";
const createToken =(user:IUser) => 
{
    return jwt.sign({ id: user.id, email: user.email }, process.env.jwtSecret || "TopSecret", {expiresIn: 86400});
}

const signUp = async (req: Request,res: Response): Promise<Response> => 
{   const user = 
    {
    email:  req.body.email,
    password: hashSync(req.body.password, 10)
    }

    if (!user.email || !user.password) {
      return res
        .status(400)
        .json({ msg: "Please. Send your email and password" });
    }
  
    const isEmail = await User.findOne({ email: req.body.email });
    if (isEmail) {
      return res.status(400).json({ msg: "The User already Exists" });
    }
   
    const newUser = new User(user);
    await newUser.save();
    return res.status(201).json(newUser);
  };


   const signIn = async ( req: Request,res: Response): Promise<Response> => {
    if (!req.body.email || !req.body.password) {
      return res
        .status(400)
        .json({ msg: "Please. Send your email and password" });
    }
  
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ msg: "The User does not exists" });
    }
  
    const isMatch = compareSync(req.body.password, user.password);
    if (isMatch) {
      return res.status(400).json({ token: createToken(user) });
    }
  
    return res.status(400).json({
      msg: "The email or password are incorrect"
    });
  };

  export {signIn, signUp}