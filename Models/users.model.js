const mongoose = require('mongoose');
const URL = require('./');
const {Schema}= mongoose;

const articleSchema = new Schema({
    name: String,
    email: String,
    number: String,
    message: String
})

module.exports = mongoose.model('user', articleSchema);