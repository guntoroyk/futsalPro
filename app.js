const express = require('express');
const app = express();
const port = 3000;

const { homeRouter, userRouter } = require('./routes');

app.set('view engine', 'ejs');
app.use(express.urlencoded());

app.use('/', homeRouter);

app.use('/user', userRouter);

app.listen(port, () => console.log(`app listening on port ${port}`));