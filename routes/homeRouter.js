const express = require('express');
const router = express.Router();
const { isLogin } = require('../middlewares')

// go to homepage
router.get('/', (req, res) => {
    if (req.session.username) {
        res.redirect('/dashboard')
    } else {
        res.render('home/home')
    }
})

module.exports = router;