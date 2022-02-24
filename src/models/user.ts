import { model, Schema } from "mongoose";
import { IUser } from "../interfaces/user";

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    }
});


export default model<IUser>("User", userSchema);
