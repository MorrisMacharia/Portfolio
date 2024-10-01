"use server";

import React from "react";
import { Resend } from "resend";
import nodemailer from 'nodemailer';
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail") as string;
  const message = formData.get("message") as string;

  // Simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  // Choose your preferred email sending method:
  // const result = await sendWithResend(senderEmail, message);
  const result = await sendWithNodemailer(senderEmail, message);

  return result;
};

async function sendWithResend(senderEmail: string, message: string) {
  try {
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "mmmchiuri@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
    return { data };
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
}

async function sendWithNodemailer(senderEmail: string, message: string) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: senderEmail,
    to: 'mmmchiuri@gmail.com',
    subject: 'New message from your website',
    text: `You have a new message from ${senderEmail}:\n\n${message}`,
    replyTo: senderEmail
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return { data: 'Email sent successfully', messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    return { error: 'Failed to send email' };
  }
}