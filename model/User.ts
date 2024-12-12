import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, "Email already exists!"],
        required: [true, "Email is required!"],
    },
    username: {
        type: String,
        required: [true, "Username is required!"],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    },
    password: {
        type: String,
        default: null,
    },
    image: {
        type: String,
    },
    roles: {
        types: [
            { type: String, enum: ['user', 'saaUser', 'dopUser', 'sapUser'], }],
        default: ['user'],
    },
    provider: {
        type: String,
    },
    subscriptionProducts: [{
        type: { type: String },
        activationDate: { type: Date },
        expirationDate: { type: Date }
    }],
    activationInfos: [{
        code: { type: String },
        product: { type: String },
        used: { type: Boolean, default: false }
    }]
});
export type subscriptionProducttype = {
    type: string;
    activationDate: Date;
    expirationDate: Date;
}
export type activationInfoType = {
    code: string;
    product: string;
    used: boolean;
}


export type UserType = {
    _id: string;
    username: string;
    email: string;
    image?: string;
    password: string;
    role: string;
    provider?: string;
    subscriptionProducts?: subscriptionProducttype[];
    activationInfos?: activationInfoType[];
}

const User = models.User || model("User", UserSchema);

export default User;