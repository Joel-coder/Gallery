import { Request, Response } from "express";

const getAllImages = (req: Request, res: Response) => {
    return res.status(200).json({message: 'pong'});
}

export default {getAllImages}