"use server";

import { connectDatabase } from "@/mongodb";
import User from "../models/User";

export const createUser = async (user: any) => {
  try {
    await connectDatabase();
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
  }
};
