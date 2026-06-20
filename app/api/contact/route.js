// app/api/contact/route.js
import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with your API Key (get this from resend.com)
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    // 1. Extract the data from the frontend form
    const formData = await request.formData();
    const name = formData.get("name");
    // Add other fields here like email, phone, message, etc.
    const attachment = formData.get("attachment");

    // 2. Prepare the attachments array
    const emailAttachments = [];

    if (attachment && typeof attachment === "object" && "arrayBuffer" in attachment) {
      // Convert the File object into a temporary memory buffer
      const bytes = await attachment.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // Push it into the array in the exact format Resend requires
      emailAttachments.push({
        filename: attachment.name,
        content: buffer,
      });
    }

    // 3. Send the email via Resend
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // Replace with your verified domain later
      to: ["businessowner@example.com"], // Where the email should go
      subject: `New Project Inquiry from ${name}`,
      text: `You have a new message from ${name}. See attached files if any.`,
      // Attach the array we built in step 2
      attachments: emailAttachments,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });

  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}