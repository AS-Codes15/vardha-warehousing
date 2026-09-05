import { NextResponse } from "next/server";
import { sql } from "../../../lib/db";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, phone, company, message } = await request.json();

    const requestId = `VWH-ENQ-${Date.now()}`;

    const result = await sql`
      INSERT INTO enquiry
      (
        "requestId",
        name,
        email,
        phone,
        company,
        message,
        "createdAt"
      )
      VALUES
      (
        ${requestId},
        ${name},
        ${email},
        ${phone},
        ${company || null},
        ${message},
        NOW()
      )
      RETURNING *;
    `;

    await resend.emails.send({
      from: "Vardha Warehousing <onboarding@resend.dev>",
      to: process.env.ADMIN_EMAIL,
      subject: "New Enquiry Received",
      html: `
    <h2>New Enquiry</h2>

    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Company:</strong> ${company || "N/A"}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Email:</strong> ${email}</p>

    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `,
    });

    return NextResponse.json({
      success: true,
      requestId,
      enquiry: result[0],
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 },
    );
  }
}
