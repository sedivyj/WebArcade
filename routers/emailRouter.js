const express = require('express');
const app = express();
const nodemailer = require("nodemailer")

const router = express.Router()
router.get('/',(req, res) =>{ 
    res.sendFile(__dirname + '/public/contact.html')
})
router.use('/submitForm',(req,res)=>{
    
    console.log(req.body)
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user: 'tracen.vail@gmail.com',
            pass: '1024#1616UWstout2'

        }

    })
    console.log("made it")
    const mailOptions ={
        from: req.body.email,
        to: 'tracen.vail@gmail.com',
        subject:`Message from ${req.body.email}: ${req.body.subject}`,
        text: req.body.message
    }
    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.log(error);
            
            res.json(error).end()
        }else{
            console.log('Email sent: ' + info.response)
            res.send('success')
        }
    })
})

module.exports = router