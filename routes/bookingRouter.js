const express = require('express');
const router = express.Router();
const { isLogin } = require('../middlewares')

const { Schedule, User, Booking } = require('../models')

// show user booking list
router.get('/', isLogin, (req, res) => {
    Booking.findAll({
        include: [
            {model: User},
            {model: Schedule}
        ],
        where: {UserId: req.session.UserId}
    })
    .then(bookings => {
        res.send(bookings);
    })
    .catch(err => {
        res.send(err);
    })
    
})

// book a field
router.get('/add/:ScheduleId', isLogin, (req, res) => {
    Booking.create({
        ScheduleId: req.params.ScheduleId,
        UserId: req.session.UserId
    })
    .then(() => {
        res.redirect('/dashboard');
    })
    .catch(err => {
        res.send(err);
    })
})

// delete a booking list
router.get('/:BookingId/delete', isLogin, (req, res) => {
    let ScheduleId;
    Booking.findByPk(req.params.BookingId)
        .then((booking) => {
            ScheduleId = booking.ScheduleId
            return Booking.destroy({where: {id: req.params.BookingId}})
        })
        .then(() => {
            return Schedule.destroy({where: {id: ScheduleId}})
        })
        .then(() => {
            res.send('berhasil delete')
        })
        .catch(err => {
            res.send(err);
        })
})



module.exports = router;