'use strict';
module.exports = (sequelize, DataTypes) => {

  const Model = sequelize.Sequelize.Model;
  class Futsalfield extends Model {

  };

  Futsalfield.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    imageUrl: DataTypes.STRING
  }, {
    sequelize
  })
  
  Futsalfield.associate = function(models) {
    // associations can be defined here
    Futsalfield.hasMany(models.Schedule);
  };
  return Futsalfield;
};