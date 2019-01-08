var express = require('express')
var app = express()
var path = require('path')


// DONT FORGET TO CHANGE THIS
var IP = '18.225.33.119'


var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser({extended : true}))


app.use(express.static(__dirname + '/public/dist/public'))
app.use(express.static(__dirname + '/minesweeper/dist/minesweeper'))
// require('./server/config/routes')(app)

const server = app.listen(5000, () => {
    console.log("Listening on port 5000")
})

app.get('/hangman', function(req, res){
    res.sendFile(path.resolve("public/dist/public/index.html"))
})

// app.get('minesweeper', function(req, res){
//     res.sendFile(path.resolve("minesweeper/dist/minesweeper/index.html"))
// })

app.all('*', function(req, res){
    res.sendFile(path.resolve("public/dist/public/index.html"))
})

// require('./sockets')(server, IP)

