const nodemailer = require("nodemailer");
require("dotenv").config();

class EmailService {
  transporter;
  transporterOptions = {
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "alexandre.schneider@ethereal.email", // da inserire nel fil env e riportare qui
      pass: "eXBcNX8TfeaPJTsT8m", // anche questo
    },
  };

  constructor() {
    this.transporter = nodemailer.createTransport(this.transporterOptions);
  }
  async send(to, subject, message) {
    try {
      const emailOptions = {
        from: "noreply@manuel.com",
        to,
        subject,
        html: message,
      };
      this.transporter.sendMail(emailOptions);
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = EmailService;
