const User = require('../Models/users.model');

class UserController {
    static async getAll(req, res) {
        const info = await User.find();
        return info;
    }

    static async getOne(req, res) {
        const info = await User.findById(itemId);
        return info;
    }

    static async create(req, res) {
        const info = await User.create(data);
        return info;
    }

    static async update(req, res) {
        const info = await User.findByIdAndUpdate(itemId, data);
        return info;
    }

    static async remove(req, res) {
        const info = await User.findByIdAndRemove(itemId);
        return info;
    }
}

module.exports = UserController;