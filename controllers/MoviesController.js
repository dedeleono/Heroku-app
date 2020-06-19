const { MoviesServices } = require('../services')

module.exports = {
    findOne: (req, res) => {
        return MoviesServices.findOne(req.body)
         .then((movie) => res.json(movie))
         .catch((err) => res.json(err))
    },

    findAll: (req, res) => {
        return MoviesServices.findAll()
         .then((movies) => res.json(movies))
         .catch((err) => res.json(err))
    }
}