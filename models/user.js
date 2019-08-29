'use strict';
module.exports = (sequelize, DataTypes) => {
  
  const Model = sequelize.Sequelize.Model;
  class User extends Model {
    addTitleName = () => {
      if (this.gender === 'male') {
        return `Mr. ${this.name}`
      } else {
        return `Ms. ${this.name}`
      }
    }
  };
  
  User.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'name is required'
        }
      }
    },
    gender: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'gender is required'
        }
      }
    },
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
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'email format invalid'
        },
        notEmpty: {
          args: true,
          msg: 'email is required'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'password is required'
        }
      }
    }
  }, {
    sequelize
  });
  
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Booking);
  };
  return User;
};