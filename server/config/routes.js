var path = require('path')
var controller = require('../controllers/games')
var interpreter = require('../controllers/speechStream')


module.exports = function(app){
    app.get('/', function(req, res){
        res.sendFile(path.resolve("public/dist/public/index.html"))
    })

    app.get('/allGames', function(req, res){
        controller.allGames(req, res)
    })

    app.post('/newGame', function(req, res){
        controller.newGame(req, res)
    })

    app.post('/writeFile', function(req, res){
        console.log("routes file")
        interpreter.recordAudio(req, res)
    })
    
    app.all('*', function(req, res){
        res.sendFile(path.resolve("public/dist/public/index.html"))
    })
}