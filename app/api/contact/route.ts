import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const validatedData = contactFormSchema.parse(body);

    console.log("Contact form submission:", {
      name: validatedData.name,
      email: validatedData.email,
      company: validatedData.company || "Not provided",
      adSpend: validatedData.adSpend,
      message: validatedData.message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your message. We'll be in touch soon!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    
    return NextResponse.json(
      {
        success: false,
        message: "There was an error processing your request.",
      },
      { status: 400 }
    );
  }
}
