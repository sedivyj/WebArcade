const express = require('express')
const app = express()
const nodemailer = require('nodemailer')

const router = express.Router()
// router.get('/', (req, res) => {
//   res.sendFile(__dirname + '/public/contact.html')
// })
router.use('/submitForm', (req, res) => {
  console.log(req.body)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD

    }

  })
  console.log('made it')
  const mailOptions = {
    from: req.body.email,
    to: process.env.EMAIL_USER,
    subject: `Message from ${req.body.email}: ${req.body.subject}`,
    text: req.body.message
  }
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error)

      res.json(error).end()
    } else {
      console.log('Email sent: ' + info.response)
      res.send('success')
    }
  })
})

module.exports = router

