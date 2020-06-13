'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tickets', [
      /**
       * Fregalo
       */
      {
        uuid: '5f16723b-52ae-4bf0-85d3-287756475cc9',
        name: 'Anime ticket',
        description: 'Support us',
        count: 1000,
        price: 100,
        datetimeFrom: '2020-05-30',
        datetimeTo: '2020-06-12',
        EventId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: '50502b77-636d-4b5e-A956-b4c4f5d767b1',
        name: 'Anime ticket',
        description: 'Free now!!!',
        count: 2000,
        price: 0,
        datetimeFrom: '2020-06-12',
        datetimeTo: '2020-06-15',
        EventId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      /**
       * Tatar
       */
      {
        uuid: '03b303f8-cff9-4e3d-a90f-4ba926188f53',
        name: 'Welcome to MoscowJS 47',
        description: '',
        count: 250,
        price: 0,
        datetimeFrom: '2020-05-20',
        datetimeTo: '2020-05-30',
        EventId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: '661cf8af-f6ea-4432-ad1b-30910df9880d',
        name: 'Welcome to MoscowJS 48',
        description: '',
        count: 300,
        price: 0,
        datetimeFrom: '2020-06-05',
        datetimeTo: '2020-06-05',
        EventId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      /**
       * Rock Battle
       */
      {
        uuid: '72c1e079-6efe-4858-be2b-e898ab18957d',
        name: '1 etap',
        description: 'Ticket for 1 etap',
        count: 500,
        price: 1500,
        datetimeFrom: '2020-06-01',
        datetimeTo: '2020-06-05',
        EventId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: '29bd87f2-8f85-404a-ad1e-bdbf205e4822',
        name: '2 etap',
        description: 'Ticket for 2 etap',
        count: 500,
        price: 1500,
        datetimeFrom: '2020-06-5',
        datetimeTo: '2020-06-10',
        EventId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: '59145a2c-7f3a-40ed-bbb5-af91fdd14a28',
        name: '3 etap',
        description: 'Ticket for 3 etap',
        count: 500,
        price: 2500,
        datetimeFrom: '2020-06-10',
        datetimeTo: '2020-06-15',
        EventId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      /**
       * VDOOH
       */
      {
        uuid: '24464059-df2a-4a1c-b0e5-47cee0502481',
        name: 'VDOOH Party №1',
        description: 'Ticket for VDOOH party №1',
        count: 1000,
        price: 500,
        datetimeFrom: '09.06.2020',
        datetimeTo: '09.06.2020',
        EventId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: 'c9c623ea-9bf8-474c-9456-023cf23508d4',
        name: 'VDOOH Party №1',
        description: 'Free ticket for VDOOH party №1',
        count: 200,
        price: 0,
        datetimeFrom: '09.06.2020',
        datetimeTo: '09.06.2020',
        EventId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        uuid: '17fd9cb7-53c3-47e3-9df0-e5ff7e507716',
        name: 'VDOOH Party №2',
        description: 'Ticket for VDOOH party №2',
        count: 1000,
        price: 500,
        datetimeFrom: '12.06.2020',
        datetimeTo: '12.06.2020',
        EventId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: '49034a99-c840-47e5-911a-9b26a6ed50c0',
        name: 'VDOOH Party №2',
        description: 'Free ticket for VDOOH party №2',
        count: 200,
        price: 0,
        datetimeFrom: '12.06.2020',
        datetimeTo: '12.06.2020',
        EventId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        uuid: '45729f46-6614-44fb-90ed-3262d57bade3',
        name: 'VDOOH Party №3',
        description: 'Ticket for VDOOH party №3',
        count: 1000,
        price: 500,
        datetimeFrom: '15.06.2020',
        datetimeTo: '15.06.2020',
        EventId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: '5e4879e9-0c86-4e6b-b3cd-5726939258b3',
        name: 'VDOOH Party №3',
        description: 'Free ticket for VDOOH party №3',
        count: 200,
        price: 0,
        datetimeFrom: '15.06.2020',
        datetimeTo: '15.06.2020',
        EventId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        uuid: 'ba3b1367-9388-4adf-b91f-18f7c010fb30',
        name: 'VDOOH Party №4',
        description: 'Ticket for VDOOH party №4',
        count: 1000,
        price: 500,
        datetimeFrom: '18.06.2020',
        datetimeTo: '18.06.2020',
        EventId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: '3463d4a1-2ea2-4f7e-a1a7-3afecce99d25',
        name: 'VDOOH Party №4',
        description: 'Free icket for VDOOH party №4',
        count: 200,
        price: 0,
        datetimeFrom: '18.06.2020',
        datetimeTo: '18.06.2020',
        EventId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        uuid: '04561c6e-83cc-4fff-a774-cfd422dc7f93',
        name: 'VDOOH Party №5',
        description: 'Ticket for VDOOH party №5',
        count: 1000,
        price: 500,
        datetimeFrom: '21.06.2020',
        datetimeTo: '21.06.2020',
        EventId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: '269cac1f-72a5-4b10-b69e-a391aa97e354',
        name: 'VDOOH Party №5',
        description: 'Free ticket for VDOOH party №5',
        count: 200,
        price: 0,
        datetimeFrom: '21.06.2020',
        datetimeTo: '21.06.2020',
        EventId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        uuid: 'b299e8ab-e32f-471c-94c7-871b6e3db62d',
        name: 'VDOOH Party №6',
        description: 'Ticket for VDOOH party №6',
        count: 1000,
        price: 500,
        datetimeFrom: '24.06.2020',
        datetimeTo: '24.06.2020',
        EventId: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: 'f3bb2a25-b4b0-4e5b-ae12-c51922323132',
        name: 'VDOOH Party №6',
        description: 'Free ticket for VDOOH party №6',
        count: 200,
        price: 0,
        datetimeFrom: '24.06.2020',
        datetimeTo: '24.06.2020',
        EventId: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        uuid: '11ffc549-04a8-43a6-afd1-b480aed5c033',
        name: 'VDOOH Party №7',
        description: 'Ticket for VDOOH party №7',
        count: 1000,
        price: 500,
        datetimeFrom: '27.06.2020',
        datetimeTo: '27.06.2020',
        EventId: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: 'c144036b-4e09-4e67-ab42-8f14a1914614',
        name: 'VDOOH Party №7',
        description: 'Free ticket for VDOOH party №7',
        count: 200,
        price: 0,
        datetimeFrom: '27.06.2020',
        datetimeTo: '27.06.2020',
        EventId: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        uuid: '42a92ac2-3577-4d67-b017-c220a743e052',
        name: 'VDOOH Party №8',
        description: 'Ticket for VDOOH party №8',
        count: 1000,
        price: 500,
        datetimeFrom: '01.07.2020',
        datetimeTo: '01.07.2020',
        EventId: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: 'b657ae1e-7918-4eb0-917a-fc8570ddd492',
        name: 'VDOOH Party №8',
        description: 'Free ticket for VDOOH party №8',
        count: 200,
        price: 0,
        datetimeFrom: '01.07.2020',
        datetimeTo: '01.07.2020',
        EventId: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        uuid: '1063f7a7-c449-4ac3-a1ce-674e99e453a4',
        name: 'VDOOH Party №9',
        description: 'Ticket for VDOOH party №9',
        count: 1000,
        price: 500,
        datetimeFrom: '04.06.2020',
        datetimeTo: '04.06.2020',
        EventId: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: '072afbc3-081f-4f6d-9d89-3abbe7de0dcf',
        name: 'VDOOH Party №9',
        description: 'Free ticket for VDOOH party №9',
        count: 200,
        price: 0,
        datetimeFrom: '04.06.2020',
        datetimeTo: '04.06.2020',
        EventId: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tickets', null, {});
  }
};
