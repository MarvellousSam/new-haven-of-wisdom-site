const mongoose = require('mongoose')
const password = 'mwgZZXYmQkRzWvmK'
const connectDb=async()=>{
    try {
        const mongoUrl = process.env.MONGO_URL || 'mongodb+srv://marvel10cent:Oloriburuku10@cluster0.ep48e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
        const db = await mongoose.connect(mongoUrl)
        const conn = db.connection.host
        console.log(`Databse connected successfully to ${conn}`)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {connectDb}