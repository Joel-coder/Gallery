import { Schema, model, connect } from 'mongoose';

export interface IImage {
    url: string;
    name: string;
}

const imageSchema = new Schema<IImage>(
    {
    url: { type: String, required: true },
    name: { type: String, required: true }})

module.exports = model<IImage>("Contact_Info",  imageSchema);

//db.contact_info.find()