const express = require('express');
const router = express.Router();

const { User } = require('../models');

// go to user list
router.get('/', (req, res) => {

})

// go to login page
router.get('/login', (req, res) => {

})

// go to register page
router.get('/register', (req, res) => {
    res.render('userRegister')
})

router.post('/register', (req, res) => {
    User.create(req.body)
        .then(user => {
            res.send('user created')
        })
        .catch(err => {
            res.send(err)
        })
})

module.exports = router;