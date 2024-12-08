import { Schema, model, models } from "mongoose";

const UserPermissionsSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    topicType: {
        type: String,
        required: true,
    },
    purchasedAt: {
        type: Date,
        default: Date.now,
    }
});

export type UserPermissionsType = {
    _id: string;
    userId: string;
    topicType: string;
    purchasedAt: Date;
}

const UserPermissions = models.UserPermissions || model("UserPermissions", UserPermissionsSchema);

export default UserPermissions;