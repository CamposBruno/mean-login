const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName : {type: String, require : true},
    lastName : {type: String, require : true},
    email : {type: String, require : true, unique : true},
    password : {type: String, require : true},
});

module.exports = mongoose.model('user', userSchema, 'users');