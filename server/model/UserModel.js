const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    userId: String,
    password: String

},
{
    timestamps: true
})

module.exports = mongoose.model('UserModel', UserSchema, 'users')