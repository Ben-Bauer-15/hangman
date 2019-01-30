var express = require('express')
var app = express()

    
// DONT FORGET TO CHANGE THIS
var IP = '10.0.0.253'


var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser({extended : true}))


app.use(express.static(__dirname + '/public/dist/public'))
require('./server/config/routes')(app)

const server = app.listen(5000, IP, () => {
    console.log("Listening on port 5000")
})

require('./sockets')(server, IP)

