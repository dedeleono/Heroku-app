const { Users } = require('../models');

module.exports = {
    create: (body) => {
        const newUser = new Users(body);
        return newUser.save();
    },

    findAll: () => {
        return Users.find({is_active: true})
    },

    delete: (_id) => {
        const deleted = Users.deleteOne({_id});
        return  deleted.is_active = false;
    }
}