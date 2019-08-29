const express = require('express');
const router = express.Router();
const { isLogin } = require('../middlewares')

const { Schedule, Futsalfield, User } = require('../models')

// go to dashboard
router.get('/', isLogin, (req, res) => {
    let user = {
        name: req.session.name,
        gender: req.session.gender
    }
    Schedule.findAll({
        include: [
            {model: Futsalfield}
        ],
        where: {isBooked: false}
    })
    .then(schedules => {
        res.render('dashboard/dashboard', {schedules, user})
        // res.send(schedules);
    })
    .catch(err => {
        res.send(err);
    });
        
})

module.exports = router;