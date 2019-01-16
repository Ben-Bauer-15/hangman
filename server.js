var express = require('express')
var app = express()
var path = require('path')


// DONT FORGET TO CHANGE THIS
var IP = '192.168.0.11'


var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser({extended : true}))


app.use(express.static(__dirname + '/public/dist/public'))
// require('./server/config/routes')(app)

const server = app.listen(5000, IP , () => {
    console.log("Listening on port 5000")
})

app.get('/', function(req, res){
    res.sendFile(path.resolve("public/dist/public/index.html"))
})

app.all('*', function(req, res){
    console.log('port 5000 request')
    res.sendFile(path.resolve("public/dist/public/index.html"))
})

require('./sockets')(server, IP)

