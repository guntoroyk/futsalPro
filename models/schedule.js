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
    // associations can be defined here
  };
  return Schedule;
};