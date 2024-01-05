'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Karyawan', [
      {
        nomorInduk: 'IP06001',
        nama: 'Agus',
        alamat: 'Jln Gaja Mada no 12, Surabaya',
        tanggalLahir: '1980-01-11',
        tanggalBergabung: '2005-08-07',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nomorInduk: 'IP06002',
        nama: 'Amin',
        alamat: 'Jln Imam Bonjol no 11, Mojokerto',
        tanggalLahir: '1977-09-03',
        tanggalBergabung: '2005-08-07',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nomorInduk: 'IP06003',
        nama: 'Yusuf',
        alamat: 'Jln A Yani Raya 15 No 14 Malang',
        tanggalLahir: '1973-08-09',
        tanggalBergabung: '2006-08-07',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nomorInduk: 'IP06004',
        nama: 'Alyssa',
        alamat: 'Jln Bungur Sari V no 166, Bandung',
        tanggalLahir: '1983-03-18',
        tanggalBergabung: '2006-09-06',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nomorInduk: 'IP06005',
        nama: 'Maulana',
        alamat: 'Jln Candi Agung, No 78 Gg 5, Jakarta',
        tanggalLahir: '1978-11-10',
        tanggalBergabung: '2006-09-10',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nomorInduk: 'IP06006',
        nama: 'Agfika',
        alamat: 'Jln Nangka, Jakarta Timur',
        tanggalLahir: '1979-02-07',
        tanggalBergabung: '2007-01-02',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nomorInduk: 'IP06007',
        nama: 'James',
        alamat: 'Jln Merpati, 8 Surabaya',
        tanggalLahir: '1989-05-18',
        tanggalBergabung: '2007-04-04',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nomorInduk: 'IP06008',
        nama: 'Octavanus',
        alamat: 'Jln A Yani 17, B 08 Sidoarjo',
        tanggalLahir: '1985-04-14',
        tanggalBergabung: '2007-05-19',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nomorInduk: 'IP06009',
        nama: 'Nugroho',
        alamat: 'Jln Duren tiga 167, Jakarta Selatan',
        tanggalLahir: '1984-01-01',
        tanggalBergabung: '2008-01-16',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nomorInduk: 'IP06010',
        nama: 'Raisa',
        alamat: 'Jln Kelapa Sawit, Jakarta Selatan',
        tanggalLahir: '1990-12-17',
        tanggalBergabung: '2008-08-16',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Karyawan', null, {});
  }
};
