const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Karyawan = sequelize.define('Karyawan', {
    nomorInduk: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alamat: {
      type: DataTypes.STRING,
    },
    tanggalLahir: {
      type: DataTypes.DATEONLY,
    },
    tanggalBergabung: {
      type: DataTypes.DATEONLY,
    },
  }, {
    tableName: 'karyawan',
    timestamps: true,
  });
  Karyawan.associate = models => {
    Karyawan.hasMany(models.Cuti, { foreignKey: 'nomorInduk', as: 'cutiData' });
  }

  return Karyawan;
};