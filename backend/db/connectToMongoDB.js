import mongoose from "mongoose";

const connectToMongoDB = async () => {
	try {
		await mongoose.connect("mongodb+srv://inetutkarsh:zHH6WMWv75sMDgtv@cluster0.hivxp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;
