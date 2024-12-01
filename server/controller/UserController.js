const Users = require('../model/UserModel')
const nodemailer = require("nodemailer")
const jwt = require('jsonwebtoken')


const jwtSecret = process.env.JWT_SECRET || '12345'


const generateToken = (id)=>{
    console.log(`Token generated ${jwtSecret}`)
    return jwt.sign({id: id}, jwtSecret , {
        expiresIn: '1h'
    })
    
}



const loginUser=async(req,res)=>{
    const {userId, password} = req.body
    if(!userId || !password ){
        res.json({message:'Fill in all the fields'})
        console.log('Missing field')
    }
    try {
        const user = await Users.findOne({userId: userId, password: password})
        console.log(user)
        if(!user){
            console.log('Missing field')
        }
        else if(user){
            res.json({message:'successful', token: generateToken(user._id)})
            console.log('User successfully logged in')
        }
        else{
            console.log('Incorrect login credentials')
        }
    } catch (error) {
        console.log(error)
    }


}




const getMe = async(req, res) =>{
    try {
        const user = {
            id: 'Admin'
        }
        console.log('Admin Verified')
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
    }
}



module.exports = {loginUser, getMe}