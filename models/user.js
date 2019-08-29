'use strict';
module.exports = (sequelize, DataTypes) => {

  const Model = sequelize.Sequelize.Model;
  class Schedule extends Model {

  };

  Schedule.init({
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize
  });

  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};