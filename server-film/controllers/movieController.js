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