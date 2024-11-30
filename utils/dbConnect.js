import mongoose from "mongoose";

const MONGODB_URI = process.env.DATABASE_URI;

if (!MONGODB_URI) {
	throw new Error("Please define the MONGODB_URI environment variable");
}

// let cached = global.mongoose;

// if (!cached) {
// 	cached = global.mongoose = { conn: null, promise: null };
// }

// async function dbConnect() {
// 	if (cached.conn) {
// 		return cached.conn;
// 	}

// 	if (!cached.promise) {
// 		const opts = {
// 			bufferCommands: false,
// 			useNewUrlParser: true,
// 			useUnifiedTopology: true,
// 			socketTimeoutMS: 30000, // Increase timeout to 30 seconds
// 			connectTimeoutMS: 30000, // Increase connection timeout to 30 seconds
// 		};

// 		cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
// 			return mongoose;
// 		});
// 	}

// 	cached.conn = await cached.promise;
// 	return cached.conn;
// }

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
