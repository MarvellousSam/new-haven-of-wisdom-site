require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')
const {connectDb} = require('./dbConfig')
// const res = require('express/lib/response')
// app.use(express.static(path.join(__dirname, '../server')))


app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT || 5000

connectDb()
app.get('/',(req,res)=>{
    res.json({message: 'welcome to how site'})
})
app.use('/api', require('./router/EventRouter'))
app.use('/api', require('./router/UsersRouter'))
app.use('/api', require('./router/NoteRouter'))


// change the file to the build file for server to send

    app.use(express.static(path.join(__dirname, '../client/build')))
    app.get('*', (req,res)=>{
        res.sendFile(path.join(__dirname, '../', 'client', 'build', 'index.html'))
    }) 
    




app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})