const Movie = require('../models/movie');

exports.movie_getAll = async (req, res) => {
    try {
        const movies = await Movie.find({});
        return res.json({movies});
    } catch(err){
        return res.json({error: err});
    }
}

exports.movie_getByCategory = async (req, res) => {
    try {
        const { genre } = req.query;
        const moviesByCategory = await Movie.find({genre: genre}).limit(8);
        return res.json(moviesByCategory);
    } catch(err){
        return res.json({error: err});
    }
}

exports.movie_getAllMovieByCategory = async (req, res) => {
    try{
        const { genre } = req.query;
        const moviesByCategory = await Movie.find({genre: genre});
        return res.json(moviesByCategory);
    } catch(err){
        return res.json({error: err});
    }
}

exports.movie_getFilmForBanner = async (req, res) => {
    try {
        const movieForBanner = await Movie.findOne({title: "The Flash (Tia Chớp)"});
        return res.json(movieForBanner);
    } catch(err){
        return res.json({error: err})
    }
}

exports.movie_getFilmBySearch = async (req, res) => {
    try {
        const { movieName } = req.query;
        const moviesByName = await Movie.find({ $text: { $search: movieName} });
        return res.json(moviesByName);
    } catch(err){
        return res.json({error: err});
    }
}

exports.movie_getDetailsFilm = async (req, res) => {
    try {
        const { id } = req.query;
        const movie = await Movie.findById(id);
        const related = await Movie.find({ genre: { $in: [...movie.genre] }}).limit(8);
        return res.json({
            movie,
            related
        });
    } catch(err){
        return res.json({error: err});
    }
}

exports.movie_addComment = async (req, res) => {
    try {
        const { id } = req.query;
        const { comment } = req.body;
        const movie = await Movie.findById(id);
        await movie.reviews.unshift(comment);
        movie.save();
        return res.json(movie.reviews);
    } catch(err) {
        return res.json({error: err});
    }
}

exports.movie_getComment = async (req, res) => {
    try {
        const { id } = req.query;
        const comment = await Movie.findById(id).select('reviews');
        return res.json(comment);
    } catch(err) {
        return res.json({error: err});
    }
}