const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.PASS_USER,
  },
});

const sendEmail = async (email, subject, html) => {
  const emailOptions = {
    sender: process.env.EMAIL_USER,
    reciever: email,
    subject,
    html,
  };

  await transporter.sendMail(emailOptions);
};

module.exports = sendEmail;
