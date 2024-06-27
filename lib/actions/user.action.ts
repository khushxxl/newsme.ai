"use server";

import { connectDatabase } from "@/mongodb";
import User from "../models/User";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";

export const createUser = async (user: any) => {
  try {
    await connectDatabase();
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
  }
};

export const createFirebaseUser = async (user: any, clerkId: any) => {
  await setDoc(doc(db, "users", clerkId), user);
};
