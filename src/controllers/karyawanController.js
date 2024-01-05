const express = require('express');
const router = express.Router();

const { getAllKaryawan,
  getKaryawanByNomorInduk,
  createKaryawan,
  editKaryawan,
  deleteKaryawan
} = require('../services/karyawanService')


router.get('/', async (req,res) => {
  try {
    let sortField = req.query.sortField;
    const allKaryawan = await getAllKaryawan(sortField);
    return res.status(200).send({
      status: "success",
      message: "Get All Karyawan",
      data: allKaryawan,
    });
  } catch (error) {
    return res.status(400).send({
      status: "failed",
      message: error.message,
    });
  }
});

router.post('/', async (req,res) => {
  try {
    const newData = req.body;
    const karyawan = await createKaryawan(newData);
    return res.status(200).send({
      status: "success",
      message: "Success Create Karyawan",
      data: karyawan,
    });
  } catch (error) {
    return res.status(400).send({
      status: "failed",
      message: error.message,
    });
  }
})

router.put('/:nomorInduk', async (req,res) => {
  try {
    const newData = req.body;
    const nomorInduk = req.params.nomorInduk
    const karyawan = await editKaryawan(newData,nomorInduk);
    return res.status(200).send({
      status: "success",
      message: "Success Update Karyawan",
      data: karyawan,
    });
  } catch (error) {
    return res.status(400).send({
      status: "failed",
      message: error.message,
    });
  }
})

router.delete('/:nomorInduk', async (req,res) => {
  try {
    const nomorInduk = req.params.nomorInduk
    const deletedKaryawan = await deleteKaryawan(nomorInduk);
    if(deletedKaryawan){
      return res.status(200).send({
        status: "success",
        message: "Success Delete Karyawan"
      });
    }
  } catch (error) {
    return res.status(400).send({
      status: "failed",
      message: error.message,
    });
  }
})

router.get('/:nomorInduk', async (req,res) => {
  try {
    const nomorInduk = req.params.nomorInduk;
    console.log(nomorInduk);
    const karyawan = await getKaryawanByNomorInduk(nomorInduk);
    return res.status(200).send({
      status: "success",
      message: "Get Karyawan",
      data: karyawan,
    });
  } catch (error) {
    return res.status(400).send({
      status: "failed",
      message: error.message,
    });
  }
});


module.exports = router;