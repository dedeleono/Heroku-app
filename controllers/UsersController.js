const { UsersServices } = require('../services');

module.exports = {
    create: (req, res) => {
        UsersServices.create(req.body)
         .then((user) => res.status(201).json(user))
         .catch((err) => res.status(400).json(err))
    },

    findAll: (req, res) => {
        UsersServices.findAll()
         .then((users) => res.status(200).json(users))
         .catch((err) => res.status(400).json(err))
    },

    delete: (req, res) => {
        UsersServices.delete(req.body)
         .then(() => res.json({}))
         .catch((err) => res.json(err))
    }
}