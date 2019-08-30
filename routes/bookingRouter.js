const express = require('express');
const router = express.Router();
const { isLogin } = require('../middlewares')

const { Schedule, User, Booking, Futsalfield } = require('../models')

// show user booking list
router.get('/', isLogin, (req, res) => {
    let bookinglist;
    let username = req.session.username
    Booking.findAll({
        include: [{
            model: Schedule
        }],
        where: { UserId: req.session.UserId }
    })
        .then((result) => {
            // res.send(result)
            bookinglist = result
            let promises = []
            result.forEach(el => {
                promises.push(Futsalfield.findByPk(el.Schedule.FutsalfieldId))
            });
            return Promise.all(promises)
        })
        .then(futsalFieldData => {
            // res.send({ futsalFieldData, bookinglist, username })
            res.render('booking/listBooking', { futsalFieldData, bookinglist, username })
        })
})

//cancel booking list
router.get('/:idSchedule/cancel/', (req, res) => {
    // res.send(req.params.id)
    Schedule.update({ isBooked: false }, { where: { id: req.params.idSchedule } })
        .then(() => {
            Booking.destroy({ where: { ScheduleId: req.params.idSchedule } })
        })
        .then(() => {
            res.redirect('/bookings')
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
            return Booking.destroy({ where: { id: req.params.BookingId } })
        })
        .then(() => {
            return Schedule.destroy({ where: { id: ScheduleId } })
        })
        .then(() => {
            res.send('berhasil delete')
        })
        .catch(err => {
            res.send(err);
        })
})



module.exports = router;