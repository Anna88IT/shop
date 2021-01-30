const mongoose = require('mongoose');
const URL = require('../config');
const {Schema}= mongoose;

const products = new Schema({
    imageUrl: URL,
    name: String,
    types: Array,
    sizes: Array,
    price: String,
    category: String,
    rating: String
})

module.exports = mongoose.model('product', products);