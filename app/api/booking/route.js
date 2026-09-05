import { NextResponse } from "next/server";
import { sql } from "../../../lib/db";
import { resend } from "@/lib/email";

export async function POST(request) {
  try {
    const {
      name,
      email,
      phone,
      company,
      businessType,
      gst,
      startDate,
      duration,
      requirements,
      length,
      width,
      height,
      area,
      rate,
      estimatedPrice,
    } = await request.json();

    const requestId = `VWH-${Date.now().toString().slice(-6)}`;

    const result = await sql`
      INSERT INTO booking
      (
        "requestId",
        name,
        email,
        phone,
        company,
        "businessType",
        gst,
        "startDate",
        duration,
        requirements,
        length,
        width,
        height,
        area,
        rate,
        "estimatedPrice",
        status,
        "createdAt"
      )
      VALUES
      (
        ${requestId},
        ${name},
        ${email},
        ${phone},
        ${company || null},
        ${businessType || null},
        ${gst || null},
        ${startDate || null},
        ${duration || null},
        ${requirements || null},
        ${length || 0},
        ${width || 0},
        ${height || 0},
        ${area},
        ${rate},
        ${estimatedPrice},
        'Pending',
        NOW()
      )
      RETURNING *;
    `;

    // Admin Notification
    await resend.emails.send({
      from: "Vardha Warehousing <onboarding@resend.dev>",
      to: process.env.ADMIN_EMAIL,
      subject: `New Booking Request - ${requestId}`,
      html: `
    <h2>New Warehouse Booking</h2>

    <p><strong>Request ID:</strong> ${requestId}</p>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Company:</strong> ${company || "N/A"}</p>

    <hr />

    <p><strong>Area:</strong> ${area} sq.ft</p>
    <p><strong>Rate:</strong> ₹${rate}/sq.ft</p>
    <p><strong>Estimated Amount:</strong> ₹${estimatedPrice}</p>
  `,
    });

    return NextResponse.json({
      success: true,
      requestId,
      booking: result[0],
    });
  } catch (error) {
    console.error("Booking Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 },
    );
  }
}
