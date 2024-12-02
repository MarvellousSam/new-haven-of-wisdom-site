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
        await Notes.create({
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
        await Notes.create({
            note: note,
            contentType: contentType
        })
        res.json({message: 'Sunday school note added'})
        console.log('Sunday School created successfully')
    } catch (error) {
        console.log(error)
    }
}

const fetchTestimony=async(req,res)=>{
    const {testimony} = req.body
    console.log(testimony)
    try {
        const testimony = await Notes.find({
            contentType: 'testimony'
        })
        res.json({testimony: testimony})
        console.log('Testimony fetched')
    } catch (error) {
        console.log(error)
    }
}

const createTestimony=async(req,res)=>{
    const {testimony} = req.body
    console.log(testimony)
    try {
        await Notes.create({
            note: testimony,
            contentType: 'testimony'
        })
        res.json({message: 'Testimony added'})
        console.log('Testimony uploaded')
    } catch (error) {
        console.log(error)
    }
}


module.exports = {fetchDailyDevotion,createDaliyDevotion, fetchSundaySchool, createSundaySchool, createTestimony, fetchTestimony}