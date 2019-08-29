'use strict';
module.exports = (sequelize, DataTypes) => {
  
  const Model = sequelize.Sequelize.Model;
  class Booking extends Model {
    static sendEmail (mailOptions) {
      const nodeMailer = require('nodemailer');
      let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          // should be replaced with real sender's account
          user: 'uzai.igun@gmail.com',
          pass: 'McDonalds123'
        }
      });
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
      });
    }
  };
  
  Booking.init({
    ScheduleId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate: (booking) => {
        // console.log(booking)
        return sequelize.models.Schedule.update({
          isBooked: true
        }, {
          where: {id: booking.ScheduleId}
        })
      },
      afterCreate: (booking) => {
        // console.log(booking)
        return sequelize.models.Booking.findByPk(booking.id, 
          {
            include: [
              {model: sequelize.models.User},
              {model: sequelize.models.Schedule},
            ],
            where: {id: booking.id}
        }
          )
          .then(booking => {
            let mailOptions = {
              to: booking.User.email,
              subject: 'Booking Info',
              text: `Book ID: ${booking.id}\nFutsal Field Id: ${booking.Schedule.FutsalfieldId}\nTime: ${booking.Schedule.session}`
            }
            return sequelize.models.Booking.sendEmail(mailOptions)
          })
      }
    },
    sequelize
  })
  
  Booking.associate = function(models) {
    // associations can be defined here
    Booking.belongsTo(models.User);
    Booking.belongsTo(models.Schedule);
  };
  return Booking;
};