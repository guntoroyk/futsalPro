'use strict';
module.exports = (sequelize, DataTypes) => {
  
  const Model = sequelize.Sequelize.Model;
  class Booking extends Model {

  };

  Booking.init({
    ScheduleId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    hooks: {
      afterCreate: (booking) => {
        console.log(booking)
        return sequelize.models.Schedule.update({
          isBooked: true
        }, {
          where: {id: booking.ScheduleId}
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