const express = require('express');
const app = express();
const session = require('express-session');
const path = require('path');
const nodeMailer = require('nodemailer');
const port = process.env.PORT || 3000;

const { homeRouter, userRouter, dashboardRouter, bookingRouter } = require('./routes');



app.set('view engine', 'ejs');
app.use(express.urlencoded());
app.use(express.static('public'))

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

app.use('/', homeRouter);

app.use('/user', userRouter);

app.use('/dashboard', dashboardRouter)

app.use('/bookings', bookingRouter)

app.get('/send-email', (req, res) => {
    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            // should be replaced with real sender's account
            user: 'uzai.igun@gmail.com',
            pass: 'McDonalds123'
        }
    });
    let mailOptions = {
        // should be replaced with real recipient's account
        to: 'guntoro.gyk@gmail.com',
        subject: "ini subject",
        body: 'ini body'
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
    res.writeHead(301, { Location: 'index.html' });
    res.end();
})

app.listen(port, () => console.log(`app listening on port ${port}`));
