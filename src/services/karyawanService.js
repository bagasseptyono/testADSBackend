const { Karyawan, Cuti } = require("../../models");
const { 
  deleteCutiByNomorInduk,
 } = require('../services/cutiService')

const getAllKaryawan = async (sortField) => {

  const orderConfig = [];
  if (sortField === 'nama') {
    orderConfig.push(['nama', 'ASC']);
  } else if (sortField === 'tanggalLahir') {
    orderConfig.push(['tanggalLahir', 'ASC']);
  } else {
    orderConfig.push(['nomorInduk', 'ASC']);
  }
  const allKaryawan = await Karyawan.findAll({
    order: orderConfig
  });
  if (!allKaryawan) {
    throw Error("Failed Show All Karyawan");
  }
  return allKaryawan;
};

const getKaryawanByNomorInduk = async (nomorInduk) => {
  console.log(nomorInduk);
  const karyawan = await Karyawan.findOne({
    where: { nomorInduk },
    include: [{ 
      model: Cuti, 
      as: 'cutiData'
    }],
  });
  if (!karyawan) {
    throw Error("Karyawan Not Found");
  }
  return karyawan;
};

const createKaryawan = async (newData) => {
  const addKaryawan = await Karyawan.create(newData);
  if (!addKaryawan) {
    throw Error("Failed Create");
  }
  return addKaryawan;
};

const editKaryawan = async (newData, nomorInduk) => {
  const updatedKaryawan = await Karyawan.update(newData, {
    where: {
      nomorInduk: nomorInduk,
    },
  });
  if (!updatedKaryawan) {
    throw Error("Failed Update");
  }
  const updatedData = getKaryawanByNomorInduk(nomorInduk);
  return updatedData;
};

const deleteKaryawan = async (nomorInduk) => {
  const checkNomorInduk = await getKaryawanByNomorInduk(nomorInduk);
  if (!checkNomorInduk) {
    throw Error("Nomor Induk Not Found");
  }
  const deletedCuti = await deleteCutiByNomorInduk(nomorInduk);
  if (!deletedCuti) {
    throw Error("Failed Delete");
  }
  const deletedKaryawan = await Karyawan.destroy({
    where: {
      nomorInduk: nomorInduk,
    },
  });
  if (!deletedKaryawan) {
    throw Error("Failed Delete");
  }
  return deletedKaryawan;
};

module.exports = {
  getAllKaryawan,
  getKaryawanByNomorInduk,
  createKaryawan,
  editKaryawan,
  deleteKaryawan,
};
