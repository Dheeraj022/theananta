import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    // Extract core fields that need specific ordering or are guaranteed
    const { name, phone, email, type, ...otherFields } = data;
    
    // Construct email content
    let emailHtml = `
      <h2>New Enquiry Received</h2>
    `;
    
    if (type) {
      emailHtml += `<p><strong>Enquiry Type:</strong> <span style="color: #075B3A; font-weight: bold;">${type}</span></p>`;
    }
    
    if (name) emailHtml += `<p><strong>Name:</strong> ${name}</p>`;
    if (phone) emailHtml += `<p><strong>Phone:</strong> ${phone}</p>`;
    if (email) emailHtml += `<p><strong>Email:</strong> ${email}</p>`;
    
    // Dynamically append any other fields that were submitted
    if (Object.keys(otherFields).length > 0) {
      emailHtml += `<hr style="border: 1px solid #eee; margin: 20px 0;" /><h3>Details</h3>`;
      for (const [key, value] of Object.entries(otherFields)) {
        if (value !== undefined && value !== null && value !== '') {
          // Format key: "travelDate" -> "Travel Date"
          const formattedKey = key
            .replace(/([A-Z])/g, ' $1') // insert a space before all caps
            .replace(/^./, (str) => str.toUpperCase()); // uppercase the first character
            
          emailHtml += `<p><strong>${formattedKey}:</strong><br/>${String(value).replace(/\n/g, '<br/>')}</p>`;
        }
      }
    }

    // Set up Nodemailer transporter for GoDaddy (or use env variables)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtpout.secureserver.net',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, // Use SSL (true for 465, false for 587)
      auth: {
        user: process.env.SMTP_EMAIL || 'info@lonavalagateway.com',
        pass: process.env.SMTP_PASSWORD,
      },
      connectionTimeout: 5000,
      greetingTimeout: 5000,
    });

    const mailOptions = {
      from: process.env.SMTP_EMAIL || 'info@lonavalagateway.com',
      to: 'info@lonavalagateway.com',
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
