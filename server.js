var express = require('express')
var app = express()
var path = require('path')


// DONT FORGET TO CHANGE THIS
var IP = '18.225.33.119'


var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser({extended : true}))


app.use(express.static(__dirname + '/public/dist/public'))
// require('./server/config/routes')(app)

const server = app.listen(8000, () => {
    console.log("Listening on port 8000")
})

app.get('/', function(req, res){
    res.sendFile(__dirname + 'index.html')
})

app.all('*', function(req, res){
    res.sendFile(path.resolve("public/dist/public/index.html"))
})

// require('./sockets')(server, IP)

