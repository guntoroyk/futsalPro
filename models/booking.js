'use strict';
module.exports = (sequelize, DataTypes) => {
  
  const Model = sequelize.Sequelize.Model;
  class Booking extends Model {

  };

  Booking.init({
    ScheduleId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    sequelize
  })

  Booking.associate = function(models) {
    // associations can be defined here
  };
  return Booking;
};