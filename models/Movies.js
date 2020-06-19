const mongoose = require('mongoose');

const MoviesSchema = mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true,
    },

    publish_date: {
        type: String,
        trim: true,
        required: false,
    },

    duration: {
        type: String,
        trim: true,
        required: true,
    },

    sinopsis: {
        type: String,
        required: true,
    },

    is_live: {
        type: Boolean,
        required: true,
    }
});

const Movies = mongoose.model('Movies', MoviesSchema);

module.exports = Movies;