import mongoose, { Schema, model } from 'mongoose';
import IImage from '../interfaces/image'


const imageSchema = new Schema(
    {
         url: { type: String, required: true },
         name: { type: String, required: true }},
    {
        timestamps: true 
    }
    )
export default mongoose.model<IImage>('image', imageSchema)
//db.contact_info.find()