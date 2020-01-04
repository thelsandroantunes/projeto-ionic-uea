'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/categoria-controller');

let _crt = new controller();

router.get('/', _crt.get);

router.get('/:id', _crt.getById);

router.post('/', _crt.post);

router.put('/:id', _crt.put);

router.delete('/:id', _crt.delete);


module.exports = router;