import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, phone, email, travelDate, checkIn, checkOut, guests, service, budget, message, listingName, type } = data;

    // We allow either the fields from the general enquiry form, or the listing detail forms
    
    // Construct email content
    let emailHtml = `
      <h2>New Enquiry Received</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
    `;

    if (email) emailHtml += `<p><strong>Email:</strong> ${email}</p>`;
    
    // Detailed forms
    if (listingName) {
      emailHtml += `<p><strong>Listing:</strong> ${listingName}</p>`;
    }
    if (type) {
      emailHtml += `<p><strong>Enquiry Type:</strong> ${type}</p>`;
    }
    if (service) {
      emailHtml += `<p><strong>Service Requested:</strong> ${service}</p>`;
    }

    // Dates
    if (travelDate) emailHtml += `<p><strong>Travel Date:</strong> ${travelDate}</p>`;
    if (checkIn) emailHtml += `<p><strong>Check-in:</strong> ${checkIn}</p>`;
    if (checkOut) emailHtml += `<p><strong>Check-out:</strong> ${checkOut}</p>`;

    if (guests) emailHtml += `<p><strong>Guests:</strong> ${guests}</p>`;
    if (budget) emailHtml += `<p><strong>Budget:</strong> ${budget}</p>`;
    if (message) emailHtml += `<p><strong>Message:</strong><br/>${message}</p>`;

    // Set up Nodemailer transporter for Hostinger
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true, // Use SSL
      auth: {
        user: process.env.SMTP_EMAIL || 'dheerajkumar8179@gmail.com',
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_EMAIL || 'dheerajkumar8179@gmail.com',
      to: 'dheerajkumar8179@gmail.com',
      subject: `New Enquiry from ${name} - Lonavala Gateway`,
      html: emailHtml,
      replyTo: email || undefined,
    };

    // Only attempt to send if a password is provided (to avoid crashing if user hasn't configured it yet)
    if (process.env.SMTP_PASSWORD) {
      await transporter.sendMail(mailOptions);
    } else {
      console.warn("SMTP_PASSWORD is not set in environment variables. Email was not sent.");
      console.log("Email content would have been:", emailHtml);
    }

    return NextResponse.json({ success: true, message: "Enquiry submitted successfully." });

  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send enquiry. Please try again later." },
      { status: 500 }
    );
  }
}
