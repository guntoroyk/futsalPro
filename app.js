const express = require('express');
const app = express();
const port = 3000;
const session = require('express-session');

const { homeRouter, userRouter, dashboardRouter, bookingRouter } = require('./routes');

app.set('view engine', 'ejs');
app.use(express.urlencoded());

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

app.use('/', homeRouter);

app.use('/user', userRouter);

app.use('/dashboard', dashboardRouter)

app.use('/bookings', bookingRouter)

app.listen(port, () => console.log(`app listening on port ${port}`));