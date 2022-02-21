import { Request, Response } from "express";
import Image from '../models/image'
const getAllImages = (req: Request, res: Response) => {
    Image.find()
    .then(results => {
        return res.status(200).json({
            images: results,
            count: results.length
        })
    })
    .catch(error => {
        return res.status(500).json({
            message: error.message,
            error
        })
    })
}

export default {getAllImages}