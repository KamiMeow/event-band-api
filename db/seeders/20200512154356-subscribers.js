'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Subscribers', [
      {
        uuid: '832e90ca-825A-49b8-93bd-e2a684cbaf14',
        TicketId: 1,
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: 'a2666e3c-20db-4885-b531-8acf16e24190',
        TicketId: 2,
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: 'ab70328a-024A-4f42-bdf7-a337221ffcca',
        TicketId: 3,
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: 'd5418b10-bae7-4a65-b45b-5ee17fc4e2ca',
        TicketId: 4,
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: '44b9985d-167F-4985-8f77-bf18a2682768',
        TicketId: 5,
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: '990a1415-d569-4feb-9e7d-c7c23c4dad0f',
        TicketId: 5,
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: '7c5105f2-b54d-4260-A013-e3a7c373baad',
        TicketId: 5,
        UserId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: '0010eb42-be8e-4fd2-a7ea-411bd0284970',
        TicketId: 3,
        UserId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: 'e6d001c7-824f-4723-9c6c-7951fdc1825d',
        TicketId: 4,
        UserId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: '069f5cfe-3836-4692-ae1d-84adbec82c9e',
        TicketId: 1,
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: '53e9afd4-989e-4e2c-a988-10c63bfc99c1',
        OrganizationId: 1,
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: '3a0ae150-080e-4895-8e99-97351f851cda',
        OrganizationId: 2,
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: '2a4b3913-b619-464d-b712-c40bd6f92f67',
        OrganizationId: 1,
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: 'cc5c7c4c-02c7-4238-8be5-220d233484ed',
        OrganizationId: 2,
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: '0e992fd9-e5b3-4879-b7fd-a228a28efb85',
        OrganizationId: 3,
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: 'd1a93ca6-1ade-4c85-B188-fbd2418fd761',
        OrganizationId: 1,
        UserId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: '2e837d50-1124-424a-90d6-2c26258b0654',
        OrganizationId: 3,
        UserId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Subscribers', null, {});
  }
};
