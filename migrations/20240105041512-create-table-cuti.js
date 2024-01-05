'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Cuti', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nomorInduk: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'Karyawan',
          key: 'nomorInduk',
        },
      },
      tanggalCuti: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      lamaCuti: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      keterangan: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

    await queryInterface.addConstraint('Cuti', {
      fields: ['nomorInduk'],
      type: 'foreign key',
      name: 'fk_cuti_nomorInduk',
      references: {
        table: 'Karyawan',
        field: 'nomorInduk',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Cuti');
  }
};
