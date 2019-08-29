const express = require('express')
const app = express()
const port = 3001
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.get('/dashboard', (req, res) => {
    res.render('dashboard')
})



app.listen(port, () => {
    console.log(`app id litened to port ${port}`);
})