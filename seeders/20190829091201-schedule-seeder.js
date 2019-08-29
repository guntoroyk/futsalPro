'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Schedules', [
      {
        session: '30-08-2019 Pagi',
        FutsalfieldId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        session: '30-08-2019 Siang',
        FutsalfieldId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        session: '30-08-2019 Sore',
        FutsalfieldId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        session: '30-08-2019 Pagi',
        FutsalfieldId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        session: '30-08-2019 Pagi',
        FutsalfieldId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
   
  }
};
