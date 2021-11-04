


const mongoose = require('mongoose');

const stadiumSchema = mongoose.Schema({
    name:String,
    capacity:String,
    country:String,
});

const stadium = mongoose.model('Stadium',stadiumSchema);
module.exports = stadium ;