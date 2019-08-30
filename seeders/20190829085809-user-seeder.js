'use strict';
const hashPassword = require('../helpers')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'John Doe',
        gender: 'male',
        username: 'johndoe',
        email: 'john@doe.com',
        password: hashPassword('password'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Blo Blu',
        gender: 'female',
        username: 'bloblu',
        email: 'blo@blu.com',
        password: hashPassword('password'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kopi Ko',
        gender: 'male',
        username: 'kopiko',
        email: 'kopi@ko.com',
        password: hashPassword('password'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kenang An',
        gender: 'female',
        username: 'kenangan',
        email: 'kenang@an.com',
        password: hashPassword('password'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
