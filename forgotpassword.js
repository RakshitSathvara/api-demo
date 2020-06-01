const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer');


router.post('/', (req, res) => {
    if (req.body.emailid != "") {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: 'Emailid',
                pass: 'password'
            }
            ,
            tls: {
                rejectUnauthorized: false
            }
        });

        let mailOptions = {
            from: 'email', // sender address
            to: req.body.emailid, // list of receivers
            subject: "subject", // Subject line
            text: "Please click on below link for new password", // plain text body
            // html: "<b>Hello world?</b>" // html body
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            } else {

                // For testing 
                // var mailResponse = {
                //     from: 'rangerforcetest@gmail.com',
                //     to: req.body.emailid,
                //     msg: 'Hello'
                // }
                // console.log(mailResponse);
                res.status(200).json({
                    'message': 'Mail Send.'
                })
            }
        });
    } else {
        res.status(200).json({
            'message': 'Invalid email'
        })
    }
})


module.exports = router

