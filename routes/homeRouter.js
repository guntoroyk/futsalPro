const express = require('express');
const router = express.Router();

// go to homepage
router.get('/', (req, res) => {
    res.send('home')
})

module.exports = router;