'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Futsalfields', [
      {
        name: 'Futsal 123',
        location: 'kebayoran lama',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Futsal 983',
        location: 'kebayoran baru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Futsal 111',
        location: 'blok x',
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
