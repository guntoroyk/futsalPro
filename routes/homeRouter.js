const express = require('express');
const router = express.Router();

// go to homepage
router.get('/', (req, res) => {
    res.render('home/home')
})

module.exports = router;