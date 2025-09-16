const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

const sendEmail = async (email, subject, html) => {
  const emailOptions = {
    form: process.env.GMAIL_USER,
    to: email,
    subject,
    html,
  };

  await transporter.sendMail(emailOptions);
};

module.exports = sendEmail;
