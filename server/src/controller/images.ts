import { Request, Response } from "express";
import mongoose from "mongoose";
import Image from '../models/image'

//https://www.youtube.com/watch?v=srPXMt1Q0nY
const saveImages = (req: Request, res: Response) => {
    let {url, name} = req.body;
    console.log(url);
    const image = new Image({
      _id: new mongoose.Types.ObjectId,
      url,
      name
    });

    return image.save()
    .then(result => {
        return res.status(201).json({
            image: result
        });
    })
    .catch(error => {
        return res.status(500).json({
            message: error.message,
            error
        })
    })
}


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

export default {getAllImages, saveImages}