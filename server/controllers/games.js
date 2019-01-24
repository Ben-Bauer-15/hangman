var Game = require('../models/hangman').game

module.exports = {
    allGames : function(req, res){
        Game.find({}, function(err, games){
            if (err) {
                res.json({message : "Failure"})
            }
            else{
                let rates = computeCompletionRates(games)
                res.json({message : "Success!", rawData : games, completionRates : rates})
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

function computeCompletionRates(arr){
    //this variable will keep track of the completion record for each word length
    //ex: { 4 : {total : 20, completed : 10} , 5 : {total : 50, completed : 6}.....}
    var tallies = {}

    //loop through the list of objects
    for (var i = 0; i < arr.length; i++){
        //access the word length attribute and completed attribute of the data object
        var wordLen = arr[i].length
        var completed = arr[i].completed

        var newTally = 0
        if (completed){
            newTally = 1
        }

        //if the word length key isn't already in tallies, add it in
        if (!tallies[wordLen]){

            tallies[wordLen] = {total : 1, completed : newTally}
        }

        else {
            tallies[wordLen].total ++
            tallies[wordLen].completed += completed
        }
    }

    var ans = []

    //now simply find a percentage completion rate
    for (var i in tallies){
        rate = tallies[i].completed / tallies[i].total
        rate = Math.floor(rate * 100)
        ans.push(
            {length : i, completionRate : rate}
        )
    }
    return ans
}