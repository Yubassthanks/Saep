const express = require('express');

const router = express.Router();

const cliente = require('../controllers/cliente');
const concessionaria = require('../controllers/concessionaria');
const automovel = require('../controllers/automovel');
const alocacao = require('../controllers/alocacao');

router.post('/cliente', cliente.create);
router.get('/cliente', cliente.read);
router.get('/cliente/:id', cliente.read);
router.put('/cliente', cliente.update);
router.delete('/cliente/:id', cliente.del);

router.post('/automovel', automovel.create);
router.get('/automovel', automovel.read);
router.get('/automovel/:id', automovel.read);
router.put('/automovel', automovel.update);
router.delete('/automovel/:id', automovel.del);

router.post('/concessionaria', concessionaria.create);
router.get('/concessionaria', concessionaria.read);
router.get('/concessionaria/:id', concessionaria.read);
router.put('/concessionaria', concessionaria.update);
router.delete('/concessionaria/:id', concessionaria.del);

router.post('/alocacao', alocacao.create);
router.get('/alocacao', alocacao.read);
router.get('/alocacao/:id', alocacao.read);
router.put('/alocacao', alocacao.update);
router.delete('/alocacao/:id', alocacao.del);

module.exports = router;
