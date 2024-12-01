const express = require('express')
const Router = express.Router()
const {protect} = require('../middleware/AuthMiddleware')
const {loginUser, getMe} = require('../controller/UserController')
Router.post('/login', loginUser )
Router.get('/admin',protect, getMe)
module.exports = Router