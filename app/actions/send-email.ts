"use server"

import nodemailer from "nodemailer"

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  // Validate inputs
  if (!name || !email || !message) {
    return { success: false, error: "All fields are required" }
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { success: false, error: "Please enter a valid email address" }
  }

  try {
    // Create transporter using your environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number.parseInt(process.env.EMAIL_PORT || "587"),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Email content
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #3b82f6; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f8fafc; padding: 20px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #1e40af; }
            .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; border-left: 4px solid #3b82f6; }
            .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>🚀 New Portfolio Contact Message</h2>
              <p>You've received a new message from your portfolio website!</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">👤 Name:</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">📧 Email:</div>
                <div class="value">${email}</div>
              </div>
              <div class="field">
                <div class="label">💬 Message:</div>
                <div class="value">${message.replace(/\n/g, "<br>")}</div>
              </div>
              <div class="footer">
                <p>📅 Received: ${new Date().toLocaleString()}</p>
                <p>🌐 From: Portfolio Website Contact Form</p>
                <p>💡 Reply directly to ${email} to respond to this inquiry.</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `

    // Send email to you
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: "tosinfreshman@gmail.com",
      subject: `🚀 Portfolio Contact: ${name}`,
      html: htmlContent,
      replyTo: email, // This allows you to reply directly to the sender
    })

    // Optional: Send confirmation email to the sender
    const confirmationHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #10b981; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f0fdf4; padding: 20px; border-radius: 0 0 8px 8px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>✅ Message Received!</h2>
            </div>
            <div class="content">
              <p>Hi ${name},</p>
              <p>Thank you for reaching out through my portfolio website! I've received your message and will get back to you as soon as possible.</p>
              <p><strong>Your message:</strong></p>
              <p style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #10b981;">${message.replace(/\n/g, "<br>")}</p>
              <p>Best regards,<br><strong>Olulana Tosin</strong><br>Full-stack Developer & UI/UX Designer</p>
              <hr style="margin: 20px 0; border: none; border-top: 1px solid #d1d5db;">
              <p style="font-size: 12px; color: #6b7280;">
                📧 tosinfreshman@gmail.com<br>
                🔗 <a href="https://github.com/tosinsg">GitHub</a> | 
                <a href="https://www.linkedin.com/in/tosin-olulana-88aa11368">LinkedIn</a>
              </p>
            </div>
          </div>
        </body>
      </html>
    `

    await transporter.sendMail({
      from: `"Olulana Tosin" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "✅ Thanks for contacting me!",
      html: confirmationHtml,
    })

    return { success: true }
  } catch (error) {
    console.error("Email sending error:", error)
    return {
      success: false,
      error: "Failed to send email. Please try contacting me directly via WhatsApp or email.",
    }
  }
}
