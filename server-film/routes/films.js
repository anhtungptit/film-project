const express = require('express');
const router = express.Router();

const filmController = require('../controllers/filmController');

router.get('/', filmController.film_getAll);

module.exports = router;