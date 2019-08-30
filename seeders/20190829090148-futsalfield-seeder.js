'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Futsalfields', [
      {
        name: 'Futsal 123',
        location: 'kebayoran lama',
        imageUrl: 'https://images.unsplash.com/photo-1536122985607-4fe00b283652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=805&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Futsal 983',
        location: 'kebayoran baru',
        imageUrl: 'https://images.unsplash.com/photo-1536122985607-4fe00b283652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=805&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Futsal 111',
        location: 'blok x',
        imageUrl: 'https://images.unsplash.com/photo-1536122985607-4fe00b283652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=805&q=80',
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
