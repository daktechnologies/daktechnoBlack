import { Resend } from "resend";

export const sendMail = async (req, res) => {
  // Instantiated here (not at module level) to ensure dotenv has already
  // run in server.js before this code executes. ES module imports are
  // hoisted and evaluated before the importing module's body runs,
  // which means a top-level `new Resend()` would see an undefined API key.
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ success: false, message: "All fields are required." });
  }

  try {
    await resend.emails.send({
      from: "Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_RECEIVER_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Message Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    res.json({ success: true, message: "Email sent successfully." });
  } catch (error) {
    console.error("Email Error:", error);
    res.status(500).json({ success: false, message: error.message || "Failed to send email." });
  }
};