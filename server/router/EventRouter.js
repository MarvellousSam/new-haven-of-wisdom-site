const express = require('express')
const Router = express.Router()
const {protect} = require('../middleware/AuthMiddleware')
const {getEvent, createEvent, deleteEvent} = require('../controller/EventController')
Router.get('/event', getEvent)
Router.post('/event',protect, createEvent)
Router.delete('/event/:id',protect, deleteEvent)
module.exports = Router