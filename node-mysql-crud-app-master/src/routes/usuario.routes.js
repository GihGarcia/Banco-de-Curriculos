const express = require('express')
const router = express.Router()
const usuarioController = require('../controllers/usuario.controller');

// Create a new employee
router.post('/', usuarioController.create);

// Retrieve a single employee with id
router.get('/:id', usuarioController.findById);

module.exports = router