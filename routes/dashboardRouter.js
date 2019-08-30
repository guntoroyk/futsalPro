const express = require('express');
const router = express.Router();
const { isLogin } = require('../middlewares')

const { Schedule, Futsalfield } = require('../models')

// go to dashboard
router.get('/', isLogin, (req, res) => {
    let username = req.session.username;
    let name = req.session.name

    Schedule.findAll({
        include: [{
            model: Futsalfield
        }],
        where: { isBooked: false }
    })
        .then(schedules => {
            res.render('dashboard/dashboard', { schedules, name })
            // res.send(schedules);
        })
        .catch(err => {
            res.send(err);
        })

})


module.exports = router;