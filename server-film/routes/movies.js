const express = require('express');
const router = express.Router();

const movieController = require('../controllers/movieController');

router.get('/', movieController.movie_getAll);
router.get('/filmByCategory', movieController.movie_getByCategory);
router.get('/filmForBanner', movieController.movie_getFilmForBanner);

module.exports = router;