var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hangman');
mongoose.Promise = global.Promise;

var GameSchema = new mongoose.Schema({
    length : Number,
    word : String,
    createdAt : Date,
    completed : Boolean
})

// var 

mongoose.model('Game', GameSchema);

module.exports = {
    game : mongoose.model('Game')
}