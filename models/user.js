'use strict';
module.exports = (sequelize, DataTypes) => {
  
  const Model = sequelize.Sequelize.Model;
  class User extends Model {
    static comparePassword = (inputPassword, password) => {
      const bcrypt = require('bcryptjs');
      
      return new Promise((resolve, reject) => {
         if(bcrypt.compareSync(inputPassword, password)) {
           resolve()
         } else {
           reject('password salah');
         }
      })
    }
  };
  
  User.init({
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    username: {
      type: DataTypes.STRING,
      validate: {
        isUnique: (username, next) => {
          User.findOne({where: {username}})
          .then(user => {
            if (user) {
              next('username has been used');
            } else {
              next();
            }
          })
          .catch(err => {
            next(err)
          })
        } 
      }
    },
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize
  });
  
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Booking);
  };
  return User;
};