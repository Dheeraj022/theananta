const nodemailer = require('nodemailer');

async function test() {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true, // Use SSL
      auth: {
        user: process.env.SMTP_EMAIL || 'info@lonavalagateway.com',
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_EMAIL || 'info@lonavalagateway.com',
      to: 'info@lonavalagateway.com',
      subject: `Test Enquiry`,
      text: 'Test',
    };

    console.log('User:', process.env.SMTP_EMAIL || 'info@lonavalagateway.com');
    // Don't log password fully
    console.log('Pass starts with:', (process.env.SMTP_PASSWORD || '').substring(0, 3));

    await transporter.sendMail(mailOptions);
    console.log('Email sent!');
  } catch (err) {
    console.error('Error:', err);
  }
}

test();
