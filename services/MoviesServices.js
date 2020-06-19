const { Movies } = require('../models');
const { Movies } = require('../models');

module.exports = {
    findOne: (title) => {
       return Movies.findOne({title})
    },

    findAll: () => {
        return Movies.findAll({is_live: true})
    }
}