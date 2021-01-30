const Product = require('../Models/products.model');

class ProductController {
    static async getAll(req, res) {
        const info = await Product.find();
        return info;
    }

    static async getOne(req, res) {
        const info = await Product.findById(itemId);
        return info;
    }

    static async create(req, res) {
        const info = await Product.create(data);
        return info;
    }

    static async update(req, res) {
        const info = await Product.findByIdAndUpdate(itemId, data);
        return info;
    }

    static async remove(req, res) {
        const info = await Product.findByIdAndRemove(itemId);
        return info;
    }
}

module.exports = ProductController;