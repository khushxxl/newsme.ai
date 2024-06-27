import User from "@/lib/models/User";
import { connectDatabase } from "@/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email } = await request.json();
  await connectDatabase();

  await User.create({ name: name, email: email });

  return NextResponse.json({
    status: "Okayy",
  });
}
