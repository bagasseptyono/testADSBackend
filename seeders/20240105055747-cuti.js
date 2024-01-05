'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cuti', [
      {
        nomorInduk: 'IP06001',
        tanggalCuti: '2020-08-02',
        lamaCuti: 2,
        keterangan: 'Acara Keluarga',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nomorInduk: 'IP06001',
        tanggalCuti: '2020-08-18',
        lamaCuti: 2,
        keterangan: 'Anak Sakit',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nomorInduk: 'IP06006',
        tanggalCuti: '2020-08-19',
        lamaCuti: 1,
        keterangan: 'Nenek Sakit',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nomorInduk: 'IP06007',
        tanggalCuti: '2020-08-23',
        lamaCuti: 1,
        keterangan: 'Sakit',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nomorInduk: 'IP06004',
        tanggalCuti: '2020-08-29',
        lamaCuti: 5,
        keterangan: 'Menikah',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nomorInduk: 'IP06003',
        tanggalCuti: '2020-08-30',
        lamaCuti: 2,
        keterangan: 'Acara Keluarga',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cuti', null, {});
  }
};
