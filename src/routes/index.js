const express = require('express');
const router = express.Router();

const karyawanController = require('../controllers/karyawanController');
const cutiController = require('../controllers/cutiController');

router.use('/karyawan', karyawanController);
router.use('/cuti', cutiController);


module.exports = router;