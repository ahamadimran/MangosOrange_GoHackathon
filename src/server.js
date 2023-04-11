import React, {Fragment} from 'react'

const server = () => {
    const express = require("express");
    const router = express.Router();
    const cors = require("cors");
    const nodemailer = require("nodemailer");

    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use("/", router);
    app.listen(3000, () => console.log("Server Running"));

    const contactEmail = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: "gohackathon2k22@gmail.com",
          pass: "Gohackathon@#123",
        },
      });
      
      contactEmail.verify((error) => {
        if (error) {
          console.log(error);
        } else {
          console.log("Ready to Send");
        }
      });

      router.post("/contact", (req, res) => {
        const name = req.body.name;
        const email = req.body.email;
        const number = req.body.number;
        const message = req.body.message; 
        const mail = {
          from: name,
          to: "gohackathon2k22@gmail.com",
          subject: "Contact Form Submission",
          html: `<p>Name: ${name}</p>
                 <p>Email: ${email}</p>
                 <p>Phone No: ${number}</p>
                 <p>Subject: ${message}</p>`,
        };
        contactEmail.sendMail(mail, (error) => {
          if (error) {
            res.json({ status: "ERROR" });
          } else {
            res.json({ status: "Message Sent" });
          }
        });
      });
  return (
    <Fragment>
        
    </Fragment>
  )
}

export default server
