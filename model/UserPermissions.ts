// import { Schema, model, models } from "mongoose";

// const UserPermissionsSchema = new Schema({
//     userId:{
//         type: Schema.Types.ObjectId,
//         ref: "User",
//     },
//     topicType: {
//         type: String,
//         required: true,
//     },
//     purchasedAt: {
//         type: Date,
//         default: Date.now,
//     }
// });

// type TopicTypes = 'SAA' | 'Dop' | 'SAP' | 'SOA';

// export type UserPermissionsType = {
//     _id: string;
//     userId: string;
//     topicType: TopicTypes;
//     purchasedAt: Date;
// }

// const UserPermissions = models.UserPermissions || model("UserPermissions", UserPermissionsSchema);

// export default UserPermissions;