const mongoose = require('mongoose');

const Schema = new mongoose.Schema();

const TestData = new Schema({
    id:{
        type:Number,required:true
    },
    name:String
});

module.exports = mongoose.model('Test',TestData);