import type { VercelRequest, VercelResponse } from "./../src/types/vercel";
import nodemailer, { type Transporter } from "nodemailer";

export default async function sendMessageHandler(req: VercelRequest, res: VercelResponse) {
  console.log("req method", req.method);
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method Not Allowed" });
  }
  const { name, email, message } = req.body;

  console.log("email ===", email);
  console.log("process.env.SMTP_USER", process.env.SMTP_USER);
  console.log("process.env.SMTP_PASS", process.env.SMTP_PASS);

  const transporter: Transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // TLS
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "stephen.mcelligott.dev@gmail.com",
      subject: `Message from ${name} via ${email}`,
      text: `${message}`,
    });
    res.status(200).json({ success: true });
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(500).json({ success: false, error: err.message });
    } else {
      res.status(500).json({ success: false, error: "Unknown error" });
    }
  }
}
