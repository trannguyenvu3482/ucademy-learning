"use server";
import mongoose from "mongoose";

// singleton pattern
let isConnected = false;
export const connectToDatabase = async () => {
  if (!process.env.MONGODB_URL) {
    throw new Error("MONGODB_URL is not defined");
  }

  if (isConnected) {
    console.log("=> Connect successful, using existing connection");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "ucademy",
    });
    isConnected = true;
    console.log("=> Using new database connection");
  } catch (error) {
    console.error("=> Connect failed", error);
  }
};
