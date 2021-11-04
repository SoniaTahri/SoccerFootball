


const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
    firstName:String,
    lastName:String,
    poste:String,
    age:String,
    number:String,
});

const player = mongoose.model('Player',playerSchema);
module.exports = player;