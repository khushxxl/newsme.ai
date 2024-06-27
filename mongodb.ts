import mongoose from "mongoose";

export const connectDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://khushaal:WUx7GoZ6jfhe9cj0@cluster0.shvhydn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
};
