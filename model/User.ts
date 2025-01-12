import { Schema, model, models } from "mongoose";

const UserProgressSchema = new Schema({
    topicId: { type: String, required: true },
    selectedOptions: { type: [String], required: true },
    isCorrect: { type: Boolean, required: true },
    attemptedAt: { type: Date, default: Date.now }
});

const ProductProgressSchema = new Schema({
    product: { type: String, required: true }, 
    completedTopics: [UserProgressSchema],
    lastAccessedAt: { type: Date, default: Date.now }
});

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
        type: [String],
        enum: ['user', 'saaUser', 'dopUser', 'sapUser'],
        default: ['user'],
    },
    provider: {
        type: String,
    },
    subscriptionProducts: [{
        product: { type: String },
        activationDate: { type: Date },
        expirationDate: { type: Date }
    }],
    activationInfos: [{
        code: { type: String },
        product: { type: String },
        used: { type: Boolean, default: false }
    }],
    cart: [{
        name: { type: String },
        description: { type: String },
        image: { type: String },
        handle: { type: String },
        price: { type: String },
        priceId: { type: String },
        quantity: { type: Number, default: 1 },
    }],
    productProgress: [ProductProgressSchema],
});


export type SubscriptionProducttype = {
    product: string;
    activationDate: Date;
    expirationDate: Date;
}
export type ActivationInfoType = {
    code: string;
    product: string;
    used: boolean;
}
export type CartItemType = {
    _id: string;
    name: string;
    description: string;
    image: string;
    handle: string;
    price: string;
    priceId: string;
    quantity: number;
}

export type UserProgressType = {
    topicId: string;
    selectedOptions: string[];
    isCorrect: boolean;
    attemptedAt: Date;
}

export type ProductProgressType = {
    product: string;
    completedTopics: UserProgressType[];
    lastAccessedAt: Date;
}

export type UserType = {
    _id: string;
    username: string;
    email: string;
    image?: string;
    password: string;
    roles: string[];
    provider?: string;
    subscriptionProducts?: SubscriptionProducttype[];
    activationInfos?: ActivationInfoType[];
    cart: CartItemType[];
    productProgress: ProductProgressType[];
}

const User = models.User || model("User", UserSchema);

export default User;