import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

// create resend client
export const resendClient = new Resend(process.env.RESEND_API_KEY || "re_test_key");

// sender details
export const sender = {
  email: process.env.EMAIL_FROM || "onboarding@resend.dev",
  name: process.env.EMAIL_FROM_NAME || "Chatify",
};