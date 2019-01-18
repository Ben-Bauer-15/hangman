var Game = require('../models/hangman').game

module.exports = {
    allGames : function(req, res){
        Game.find({}, function(err, games){
            if (err) {
                res.json({message : "Failure"})
            }
            else{
                res.json({message : "Success!", data : games})
            }
        })
    },
    
    newGame : function(req, res){
        var newGame = new Game({
            length : req.body.length,
            word : req.body.word,
            createdAt : new Date(),
            completed : req.body.completed
        })
        newGame.save(function(err){
            if (err) {
                res.json({message : "Failure"})
            }
            else {
                res.json({message : "Success"})
            }
        })
    }
}