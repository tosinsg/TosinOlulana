"use server"

import nodemailer from "nodemailer"

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  if (!name || !email || !message) {
    return { success: false, error: "All fields are required" }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { success: false, error: "Please enter a valid email address" }
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Main email content (to you)
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: "tosinfreshman@gmail.com",
      subject: `🚀 New Contact from ${name}`,
      html: `
        <h2>New Portfolio Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <small>Reply directly to <a href="mailto:${email}">${email}</a></small>
      `,
      replyTo: email,
    })

    // Confirmation email to sender
    await transporter.sendMail({
      from: `"Olulana Tosin" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "✅ Message Received",
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for reaching out! I’ve received your message and will get back to you soon.</p>
        <p><strong>Your message:</strong><br>${message.replace(/\n/g, "<br>")}</p>
        <p>Regards,<br>Olulana Tosin</p>
      `,
    })

    return { success: true }
  } catch (error) {
    console.error("❌ Email error:", error)
    return {
      success: false,
      error: "Something went wrong. You can reach me directly via email or WhatsApp.",
    }
  }
}
