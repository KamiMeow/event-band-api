'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Events', [
      /**
       * Fregalo
      */
      {
        uuid: '7595d0f1-9836-4c9f-8002-5e310eed883d',
        name: 'Anime party',
        description: 'ANIME!!! Ha-ha welvome to us',
        datetimeFrom: '2020-05-30',
        datetimeTo: '2020-06-12',
        coords: '55.7822200, 37.5255600',
        OrganizationId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: '13c2db04-6375-47bc-a878-7a397ba4f3bd',
        name: 'Anime party 2.0',
        description: 'ANIME RETURN!!!',
        datetimeFrom: '2020-06-12',
        datetimeTo: '2020-06-15',
        coords: '55.7522200, 37.5155600',
        OrganizationId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      /**
       * Tatar
       */
      {
        uuid: '300921b1-4ae3-442d-8396-642cde5e565b',
        name: 'MoscowJS 47',
        description: 'MoscowJS return! MoscowJS 47',
        datetimeFrom: '2020-05-20',
        datetimeTo: '2020-05-30',
        coords: '55.5522200, 37.5155600',
        OrganizationId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: '2529bdad-5501-43a3-852b-bba563592d2f',
        name: 'MoscowJS 48',
        description: 'MoscowJS return! MoscowJS 48',
        datetimeFrom: '2020-06-05',
        datetimeTo: '2020-06-05',
        coords: '55.7522200, 37.5355600',
        OrganizationId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      /**
       * Rock Battle
       */
      {
        uuid: 'e9c976b2-a77c-442A-8ffd-ff2a3ff4ee6a',
        name: 'Rock battle event',
        description: 'Rock battle here',
        datetimeFrom: '2020-06-01',
        datetimeTo: '2020-06-15',
        coords: '55.7822200, 37.5855600',
        OrganizationId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      /**
       * VDOOH
       */
      {
        uuid: 'eaf2261d-a885-4c50-b0f7-36aadda12478',
        name: 'VDOOH Party No.1',
        description: 'Our company organizes events of a new level',
        datetimeFrom: '2020-06-09',
        datetimeTo: '2020-06-09',
        OrganizationId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: 'c27ce1cd-8afd-43fb-9932-dbe830f452dd',
        name: 'VDOOH Party No.2',
        description: 'Our company organizes events of a new level',
        datetimeFrom: '2020-06-12',
        datetimeTo: '2020-06-12',
        coords: '55.8398707, 37.4902621',
        OrganizationId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: '6c884980-23cf-4150-aec1-a9bf89be5f78',
        name: 'VDOOH Party No.3',
        description: 'Our company organizes events of a new level',
        datetimeFrom: '2020-06-15',
        datetimeTo: '2020-06-15',
        coords: '55.8398707, 37.4902621',
        OrganizationId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: '80ea8dcb-4e92-4aee-9181-01c70e5c0f96',
        name: 'VDOOH Party No.4',
        description: 'Our company organizes events of a new level',
        datetimeFrom: '2020-06-18',
        datetimeTo: '2020-06-18',
        coords: '55.8398707, 37.4902621',
        OrganizationId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: '0961a533-7d80-4638-914d-29f4a77d6c04',
        name: 'VDOOH Party No.5',
        description: 'Our company organizes events of a new level',
        datetimeFrom: '2020-06-21',
        datetimeTo: '2020-06-21',
        coords: '55.8398707, 37.4902621',
        OrganizationId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: '6fe63fc4-3dcb-447c-ba59-644f7e3199ad',
        name: 'VDOOH Party No.6',
        description: 'Our company organizes events of a new level',
        datetimeFrom: '2020-06-24',
        datetimeTo: '2020-06-24',
        coords: '55.8398707, 37.4902621',
        OrganizationId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: '867c5dd7-c419-4948-919f-0699eaed9eea',
        name: 'VDOOH Party No.7',
        description: 'Our company organizes events of a new level',
        datetimeFrom: '2020-06-27',
        datetimeTo: '2020-06-27',
        coords: '55.8398707, 37.4902621',
        OrganizationId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: 'dcfbd026-b16e-496d-9895-b1303df5b9fe',
        name: 'VDOOH Party No.8',
        description: 'Our company organizes events of a new level',
        datetimeFrom: '2020-07-01',
        datetimeTo: '2020-07-01',
        coords: '55.8398707, 37.4902621',
        OrganizationId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: 'f21ab991-915a-440c-ae89-fce4fa4c70fc',
        name: 'VDOOH Party No.9',
        description: 'Our company organizes events of a new level',
        datetimeFrom: '2020-06-04',
        datetimeTo: '2020-06-04',
        coords: '55.8398707, 37.4902621',
        OrganizationId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      /**
       * Pocky
       */
      {
        uuid: 'e81d8d26-1c7a-43ef-8ff8-5e027929b4c1',
        name: 'Pocky on factofy conf.',
        description: 'Welcome to the pocky manufacturing factory',
        datetimeFrom: '2020-06-01',
        datetimeTo: '2020-06-02',
        coords: '55.8898707, 37.4992621',
        OrganizationId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: '5566edd5-6a06-4850-a376-a109f36094c2',
        name: 'Pocky on factofy conf.',
        description: 'Welcome to the pocky manufacturing factory',
        datetimeFrom: '2020-06-10',
        datetimeTo: '2020-06-11',
        coords: '55.8898707, 37.4992621',
        OrganizationId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: '232fa76a-a4ee-4bd6-8b4d-3c6d281125e7',
        name: 'Pocky on factofy conf.',
        description: 'Welcome to the pocky manufacturing factory',
        datetimeFrom: '2020-06-20',
        datetimeTo: '2020-07-01',
        coords: '55.8898707, 37.4992621',
        OrganizationId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: '83e49830-f2e2-4e43-af5a-a11240abbf21',
        name: 'Pocky on factofy conf.',
        description: 'Welcome to the pocky manufacturing factory',
        datetimeFrom: '2020-07-10',
        datetimeTo: '2020-07-11',
        coords: '55.8898707, 37.4992621',
        OrganizationId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: '67a12d21-7421-427d-9a86-4e18ac729a1d',
        name: 'Pocky on factofy conf.',
        description: 'Welcome to the pocky manufacturing factory',
        datetimeFrom: '2020-07-20',
        datetimeTo: '2020-07-21',
        coords: '55.8898707, 37.4992621',
        OrganizationId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      /**
       * Tetris
       */
      {
        uuid: '67a12d21-7431-427d-9a86-4e18ac729a1d',
        name: 'Tetris competitions conf.',
        description: 'Go to tetris battle',
        datetimeFrom: '2020-07-20',
        datetimeTo: '2020-07-21',
        coords: '55.9298707, 37.6732621',
        OrganizationId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: '4b25208b-be5c-496d-9df6-76c3c0bbc50b',
        name: 'Tetris competitions conf.',
        description: 'Go to tetris battle',
        datetimeFrom: '2020-07-20',
        datetimeTo: '2020-07-21',
        coords: '55.9298707, 37.6732621',
        OrganizationId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: '4cd1cecc-e28a-452e-bc7e-ae6022940936',
        name: 'Tetris competitions conf.',
        description: 'Go to tetris battle',
        datetimeFrom: '2020-07-20',
        datetimeTo: '2020-07-21',
        coords: '55.9298707, 37.6732621',
        OrganizationId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: 'ecec1508-a68e-4455-8bd3-b664c6093780',
        name: 'Tetris competitions conf.',
        description: 'Go to tetris battle',
        datetimeFrom: '2020-07-20',
        datetimeTo: '2020-07-21',
        coords: '55.9298707, 37.6732621',
        OrganizationId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Events', null, {});
  },
};
