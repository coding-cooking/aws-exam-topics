import mongoose from "mongoose";

const MONGODB_URI = process.env.DATABASE_URI;

if (!MONGODB_URI) {
	throw new Error("Please define the MONGODB_URI environment variable");
}

let isConnected = false;

export const dbConnect = async () => {
	mongoose.set("strictQuery", true);

	if (isConnected) {
		console.log("MongoDB is already connected");
		return;
	}
	try {
		await mongoose.connect(MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			dbName: "topicsdb",
		});

		isConnected = true;
		console.log("MongoDB connected");
	} catch (error) {
		console.log(error);
	}
};
