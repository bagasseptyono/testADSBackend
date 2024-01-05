const express = require('express');
const router = express.Router();

const { 
  getAllCuti,
  getCutiById,
  createCuti,
  editCuti,
  deleteCutiById,
 } = require('../services/cutiService')


router.get('/', async (req,res) => {
  try {
    let sortField = req.query.sortField;
    const allCuti = await getAllCuti(sortField);
    return res.status(200).send({
      status: "success",
      message: "Get All Cuti",
      data: allCuti,
    });
  } catch (error) {
    return res.status(400).send({
      status: "failed",
      message: error.message,
    });
  }
})

router.get('/:id', async (req,res) => {
  try {
    const idCuti = parseInt(req.params.id);
    const cuti = await getCutiById(idCuti);
    return res.status(200).send({
      status: "success",
      message: "Get Detail Cuti",
      data: cuti,
    });
  } catch (error) {
    return res.status(400).send({
      status: "failed",
      message: error.message,
    });
  }
})

router.post('/', async (req,res) => {
  try {
    const newData = req.body;
    const cuti = await createCuti(newData);
    return res.status(200).send({
      status: "success",
      message: "Success Create Cuti",
      data: cuti,
    });
  } catch (error) {
    return res.status(400).send({
      status: "failed",
      message: error.message,
    });
  }
})


router.put('/:id', async (req,res) => {
  try {
    const newData = req.body;
    const id = req.params.id
    const cuti = await editCuti(newData,id);
    return res.status(200).send({
      status: "success",
      message: "Success Update Cuti",
      data: cuti,
    });
  } catch (error) {
    return res.status(400).send({
      status: "failed",
      message: error.message,
    });
  }
})


router.delete('/:id', async (req,res) => {
  try {
    const id = req.params.id
    const deletedCuti = await deleteCutiById(id);
    if(deletedCuti){
      return res.status(200).send({
        status: "success",
        message: "Success Delete Cuti"
      });
    }
  } catch (error) {
    return res.status(400).send({
      status: "failed",
      message: error.message
    });
  }
})

module.exports = router;