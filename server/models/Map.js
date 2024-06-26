// map schema - stores locations of activities

const mongoose = require("mongoose");
const { ObjectId } = require('mongodb');

const MapSchema = new mongoose.Schema({
    map_id:{
        type:ObjectId,
        required:true,
    },
    longitude:{
        type:Number,
        required:true,
    },
    latitude:{
        type:Number,
        required:true,
    },
    desc:{
        type:String,
        required:false, 
    },
    title:{
        type:String,
        required:false, 
    },
    address:{
        type:String,
        required:false, 
    },
    playstyle:{
        type:String,
        required:false, 
    },
    image:{
        type:String,
        required: false
    }
})

module.exports = Map = mongoose.model('map', MapSchema);