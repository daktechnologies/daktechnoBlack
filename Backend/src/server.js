import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";
import resendRoute from "./router/resendRoute.js";

dotenv.config();

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors());
app.use(express.json());

app.use("/api/v1", resendRoute)

// app.post("/api/send-email", async (req, res) => {
//   const { name, email, subject, message } = req.body;

//   if (!name || !email || !subject || !message) {
//     return res.status(400).json({ success: false, msg: "All fields required" });
//   }

//   try {
//     await resend.emails.send({
//       from: "Contact <onboarding@resend.dev>",
//       to: process.env.CONTACT_RECEIVER_EMAIL,
//       subject,
//       html: `
//         <h2>New Message Received</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Message:</strong> ${message}</p>
//       `,
//     });

//     res.json({ success: true });
//   } catch (error) {
//     console.log("Email Error:", error);
//     res.status(500).json({ success: false });
//   }
// });

app.listen(process.env.PORT, () =>
  console.log(`Server running on port http://localhost:${process.env.PORT}`)
);
