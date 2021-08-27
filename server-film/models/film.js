const mongoose = require('mongoose');

const filmSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    posterImg: {
        type: String,
        required: true
    },
    bannerImg: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    actor: {
        type: Array,
        required: true
    },
    trailerUrl: {
        type: String,
        required: true
    },
    filmUrl: {
        type: String,
        required: true
    },
    genre: {
        type: Array,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

filmSchema.index({ title: "text"});

module.exports = mongoose.model('Film', filmSchema);