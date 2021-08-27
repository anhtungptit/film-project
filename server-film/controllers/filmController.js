const Film = require('../models/film');

exports.film_getAll = async (req, res) => {
    try {
        const films = await Film.find({});
        return res.json({films});
    } catch(err){
        return res.json({error: err});
    }
}