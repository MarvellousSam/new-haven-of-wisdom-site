const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({
    contentType: String,
    note: String
},
{
    timestamps: true
})

module.exports = mongoose.model('NoteModel', NoteSchema, 'notes')