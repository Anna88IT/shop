const mongoose = require('mongoose');
const URL = require('../config');
const {Schema}= mongoose;

const users = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    mobile: String
})

module.exports = mongoose.model('user', users);