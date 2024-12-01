const express = require('express')
const Router = express.Router()
const {createDaliyDevotion, fetchDailyDevotion, fetchSundaySchool, createSundaySchool} = require('../controller/NoteController')
const {protect} = require('../middleware/AuthMiddleware')
Router.get('/dailyDevotion', fetchDailyDevotion)
Router.post('/dailyDevotion',protect, createDaliyDevotion)
Router.get('/sundaySchool', fetchSundaySchool)
Router.post('/sundaySchool',protect, createSundaySchool)
module.exports = Router