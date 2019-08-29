'use strict';
module.exports = (sequelize, DataTypes) => {

  const Model = sequelize.Sequelize.Model;
  class Schedule extends Model {

  };

  Schedule.init({
    session: DataTypes.STRING,
    FutsalfieldId: DataTypes.INTEGER,
    isBooked: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize
  });

  Schedule.associate = function(models) {
    // associations can be defined 
    Schedule.belongsTo(models.Futsalfield);
    Schedule.hasMany(models.Booking);
    Schedule.belongsToMany(models.User, {through: 'Booking'})
  };
  return Schedule;
};