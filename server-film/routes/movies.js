const express = require('express');
const router = express.Router();

const movieController = require('../controllers/movieController');

router.get('/', movieController.movie_getAll);
router.get('/filmByCategory', movieController.movie_getByCategory);
router.get('/allFilmByCategory', movieController.movie_getAllMovieByCategory);
router.get('/filmForBanner', movieController.movie_getFilmForBanner);
router.get('/filmBySearch', movieController.movie_getFilmBySearch);
router.get('/detailsFilm', movieController.movie_getDetailsFilm);
router.post('/addComment', movieController.movie_addComment);

module.exports = router;