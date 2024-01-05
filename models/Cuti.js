const { DataTypes } = require('sequelize');
const  Karyawan  = require('./karyawan')

module.exports = (sequelize) => {
  const Cuti = sequelize.define('Cuti', {
    nomorInduk : {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Karyawan,
        key: 'nomorInduk',
      },
    },
    tanggalCuti: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    lamaCuti: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    keterangan: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'cuti',
    timestamps: true,
  });

  Cuti.associate = models =>{
    Cuti.belongsTo(models.Karyawan, { foreignKey: 'nomorInduk' });
  }

  return Cuti;
};
