const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    genre: {
        type: String,
        required: true
    },
    vnGenre: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Catergory', categorySchema);