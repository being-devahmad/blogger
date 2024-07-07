import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/blogger')
        console.log("Database connection established")
    } catch (error) {
        console.log("Database connection error", error)
    }
}