const nodemailer = require('nodemailer');
const { config } = require('../config/index');
const Contact = require('../models/contact');

exports.transporter = async (req, res) => {
    const { firstName, email, content } = req.body;
    const newContact = new Contact({ firstName, email, content })
    const contactSaved = await newContact.save()

    contentHTML = `
        <h1>User Information</h1>
        <ul>
            <li>First name: ${firstName}</li>
            <li>Email: ${email}</li>
            <li>Content: ${content}</li>
        </ul>
    `;

    let transporter = nodemailer.createTransport({
        host: 'smtpout.secureserver.net',
        port: 465,
        secure: true,
        auth: {
            user: config.MAILER_USER,
            pass: config.MAILER_PASS
        }
    });

    let info = await transporter.sendMail({
        from: config.MAILER_USER,
        to: config.MAILER_USER,
        subject: req.body.subject,
        html: contentHTML
    })

    console.log('Message sent: %s', info.messageId);

    res.status(201).json(contactSaved)
}