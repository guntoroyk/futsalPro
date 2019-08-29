const express = require('express');
const router = express.Router();
const { isLogin } = require('../middlewares')

const { Schedule, User, Booking } = require('../models')

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

router.get('/add/:ScheduleId', isLogin, (req, res) => {
    Booking.create({
        ScheduleId: req.params.ScheduleId,
        UserId: req.session.UserId
    })
    .then(() => {
        res.send('booking berhasil')
    })
    .catch(err => {
        res.send(err);
    })
})

router.post('/add/:ScheduleId', isLogin, (req, res) => {
   
})

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