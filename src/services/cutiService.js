const { Cuti } = require('../../models');


const getAllCuti = async (sortField) => {
  const orderConfig = [];
  if (sortField === 'tanggalCuti') {
    orderConfig.push(['tanggalCuti', 'ASC']);
  } else {
    orderConfig.push(['nomorInduk', 'ASC']);
  }
  const allCuti = await Cuti.findAll({
    order: orderConfig
  });
  if(!allCuti){
    throw Error('Data Cuti Not Found')
  }
  return allCuti;
}

const getCutiById = async (id) => {
  const getCuti = await Cuti.findByPk(id);
  if(!getCuti){
    throw Error('Data Cuti Not Found')
  }
  return getCuti;
}

const getCutiByNomorInduk = async (nomorInduk) => {
  const allCuti = await Cuti.findAll({where:{nomorInduk:nomorInduk}});
  return allCuti;
}

const createCuti = async (newData) => {
  const addCuti = await Cuti.create(newData);
  if (!addCuti) {
    throw Error('Failed Create');
  }
  return addCuti
}

const editCuti = async (newData, id) => {
  const updatedCuti = await Cuti.update(newData, {
    where: {
      id: id
    }
  });
  if (!updatedCuti) {
    throw Error('Failed Update');
  }
  const updatedData = getCutiById(id);
  return updatedData;
}


const deleteCutiById = async (id) => {
  const checkId = await getCutiById(id);
  if (!checkId) {
    throw Error("Nomor Induk Not Found");
  }
  const deletedCuti = await Cuti.destroy({
    where: {
      id: id
    }
  });
  if (!deletedCuti) {
    throw Error('Failed Delete')
  }
  return deletedCuti;
}

const deleteCutiByNomorInduk = async (nomorInduk) => {
  const deletedCuti = await Cuti.destroy({
    where: {
      nomorInduk: nomorInduk
    }
  });
  if (!deletedCuti) {
    throw Error('Failed Delete')
  }
  return deletedCuti;
}

module.exports = {
  getAllCuti,
  getCutiById,
  getCutiByNomorInduk,
  createCuti,
  editCuti,
  deleteCutiById,
  deleteCutiByNomorInduk
}