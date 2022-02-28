import { Document } from 'mongoose'

export default interface IImage extends Document {
    url: string;
    name: string;
}
