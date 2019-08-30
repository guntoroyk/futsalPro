const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');


// models
const { User } = require('../models');

// helpers
const { hashPassword } = require('../helpers');

// middlewares
const { isLogin } = require('../middlewares')

// go to user list
router.get('/', (req, res) => {
    if (req.session.username) {
        res.redirect('/dashboard')
    } else {
        res.redirect('/user/login')
    }
})

// go to login page
router.get('/login', (req, res) => {
    if (req.session.username) {
        res.redirect('/dashboard')
    } else {
        res.render('user/login');
        // res.redirect('/user/login')
    }
})

router.post('/login', (req, res) => {
    User.findOne({ where: { username: req.body.username } })
        .then(user => {
            if (user) {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    req.session.username = req.body.username
                    req.session.UserId = user.id
                    req.session.name = user.name
                    res.redirect('/dashboard')
                } else {
                    res.redirect('/user/login?err=password incorrect')
                }
            } else {
                res.redirect('/user/login?err=username not found')
            }
        })
        .catch(err => {
            res.send(err);
        })
})


// go to register page
router.get('/register', (req, res) => {
    let errors = []
    for (let key in req.query) {
        errors.push(req.query[key])
    }
    res.render('user/register', { errors })
})

// register new user
router.post('/register', (req, res) => {
    User.create({
        name: req.body.name,
        gender: req.body.gender,
        username: req.body.username,
        email: req.body.email,
        password: hashPassword(req.body.password)
    })
        .then(user => {
            res.redirect('/user/login')
            // res.send('user created')
        })
        .catch(err => {
            let url = ``;
            err.errors.forEach((error, i) => {
                url += `err${i}=${error.message}&`
            });
            res.redirect(`/user/register?${url}`)
            // res.send(err)
        })
})

router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/dashboard')
})

module.exports = router;