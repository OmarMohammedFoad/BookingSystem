import nodemailer from "nodemailer";
export const mailer = async (from, to, subject, text, html) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "omarfouad15e@gmail.com",
      pass: "csbk uakg tnlf faru",
    },
  });

  await transporter
    .sendMail({
      from: from, // sender address
      to: to, // list of receivers
      subject: subject, // Subject line
      text: text, // plain text body
      html: html, // html body
    })
    .then((res) => {
      console.log("email has been sent ");
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
