const mongoose = require('mongoose');

const Users = new mongoose.Schema({
}, {timestamps: true})

module.exports = mongoose.model('users', Users);