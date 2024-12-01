const Event = require('../model/EventModel')


const getEvent=async(req,res)=>{
    try {
        const event = await Event.find({}).sort({_id:-1})
        if(!event){
            res.json({message: 'No event found'})
        }else{
            res.json({event: event })
        }
    } catch (error) {
        console.log(error)
    }
}

const createEvent=async(req,res)=>{
    const {title, imageUrl, content} = req.body
    try {
        const event = await Event.create({
            imageUrl: imageUrl
        })
        console.log('New event created successfully')
    } catch (error) {
        console.log(error)
    }
}


const deleteEvent=async(req,res)=>{
    const {id} = req.params
    try {
        console.log(id)
        const event = await Event.deleteOne({_id: id})
        console.log('Event deleted successfully')
    } catch (error) {
        console.log(error)
    }
}






module.exports = {getEvent, createEvent, deleteEvent}