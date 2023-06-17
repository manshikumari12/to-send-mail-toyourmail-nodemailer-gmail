const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "guptamanshi606@gmail.com",
      pass: "pecdubvwywqpctqk",
    },
  });

  let mailOptions = {
    from: "guptamanshi606@gmail.com",
    to:"manshisbp@gmail.com" ,
    subject: "Email from fitindia",
    text: "welcome to manshigupta from manshu sucessfully"
  }

  transporter.sendMail(mailOptions,(error,info ) => {
    if (error) {
      console.log(error);
  
    } else {
      console.log("Email sent: "+info.response);
   
    }
  });