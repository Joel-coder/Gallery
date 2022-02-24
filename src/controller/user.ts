import { Request, Response } from 'express';
import { IUser } from "../interfaces/user";
import  User  from "../models/user";
import  jwt from "jsonwebtoken";

const createToken =(user:IUser) => 
{
    return jwt.sign({ id: user.id, email: user.email }, process.env.jwtSecret || "TopSecret", {expiresIn: 86400});
}

