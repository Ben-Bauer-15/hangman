var io;
var dataPageRoom = makeid()

var controller = require('./server/controllers/games')


module.exports = function(server, IP){
    io = require('socket.io')(server)


    io.on('connection', (socket) => {
        var id = makeid()
        socket.emit('welcome', {roomID : id, address : IP})

        socket.on('firstUser', (data) => {
            socket.join(data.roomID)
        })

        socket.on('joinRoom', (data) => {
            socket.join(data.roomID)
            socket.to(data.roomID).emit('otherUser', {message : "Someone else has joined!"})
        })

        socket.on('clicked', (data) => {
            socket.to(data.roomID).emit('clicked', {game : data.game})
        })

        socket.on('currentGameBoard', (data) => {
            socket.to(data.roomID).emit('currentGameBoard', {game : data.game, messages : data.messages})
        })

        socket.on('newMsg', (data) =>{
            socket.to(data.roomID).emit('newMsg', {msg : data.msg, name : data.name})
        })

        socket.on('dataPage', () => {
            socket.join(dataPageRoom)
            socket.emit('hello', {msg : 'welcome to data!'})
        })

        socket.on('updateData', () => {
            console.log('someone finished a game')
            socket.to(dataPageRoom).emit('updatedData', {msg : 'Success'})
        })
    })
}


function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 15; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
