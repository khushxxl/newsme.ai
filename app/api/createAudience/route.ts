import Audience from "@/lib/models/Audience";
import { connectDatabase } from "@/mongodb";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_Nu7RJ4SJ_Abo8LVTSnSx6kNRKUncMcvpZ");

export async function POST(request: Request) {
  const { audienceName, userData } = await request.json();

  await connectDatabase();

  await Audience.create({ user: userData, audienceName: audienceName });

  return NextResponse.json({
    status: "Audience Created",
  });
}
