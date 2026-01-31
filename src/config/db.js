import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/alumnos"),
            console.log("mongo db conectado")
        
    } catch (error) {
        console.error("MongoDB connection error:", error);
        
    }
};
