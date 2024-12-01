const Notes = require('../model/NoteModel')


const fetchDailyDevotion=async(req, res)=>{
    try {
        const note = await Notes.findOne({contentType: 'openHeaven'}).sort({_id:-1}).select('note')
        if(note){
            console.log('Daily devotion fetched')
            res.json({note: note})
        }

    } catch (error) {
        console.log(error)
    }
}


const createDaliyDevotion=async(req,res)=>{
    const {contentType, note} = req.body
    console.log(note)
    try {
        const dailyDevotion = await Notes.create({
            note: note,
            contentType, contentType
        })
        res.json({message: 'Daily devotion added'})
        console.log('Open Heaven created successfully')
    } catch (error) {
        console.log(error)
    }
}


const fetchSundaySchool=async(req, res)=>{
    try {
        const note = await Notes.findOne({contentType: 'sundaySchool'}).sort({_id: -1}).select('note')
        console.log('Sunday school fetched')
        if(note){
            res.json({note: note})
        }
        
    } catch (error) {
        console.log(error)
    }
}


const createSundaySchool=async(req,res)=>{
    const {contentType, note} = req.body
    console.log(note)
    try {
        const dailyDevotion = await Notes.create({
            note: note,
            contentType, contentType
        })
        res.json({message: 'Sunday school note added'})
        console.log('Sunday School created successfully')
    } catch (error) {
        console.log(error)
    }
}


module.exports = {fetchDailyDevotion,createDaliyDevotion, fetchSundaySchool, createSundaySchool}