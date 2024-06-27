import EmailTemplate from "@/app/email/email";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_Nu7RJ4SJ_Abo8LVTSnSx6kNRKUncMcvpZ");

export async function POST(request: Request) {
  const { emailSubject, emailContent } = await request.json();
  await resend.emails.send({
    from: "Khushaal <khushaal@khushcodezz.net>",
    to: "khushaal.choithramani@gmail.com",
    subject: emailSubject,
    react: EmailTemplate({ content: emailContent }),
  });

  return NextResponse.json({
    status: "Okayy",
  });
}
