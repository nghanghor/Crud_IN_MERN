const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TestData = new Schema({
    id:Number,
    name:String
});

module.exports = mongoose.model('Test',TestData);