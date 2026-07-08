import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGO_URI || "mongodb://127.0.0.1:27017/chatify"
    );

    console.log("MongoDB connected:", conn.connection.host);
  } catch (error) {
    console.log("Error connection to MONGODB:", error);
    process.exit(1);
  }
};