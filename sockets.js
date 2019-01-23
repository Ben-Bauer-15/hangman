var io;

module.exports = function(server, IP){
    io = require('socket.io')(server)


    io.on('connection', (socket) => {
        console.log(socket.id)
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
    })
}


function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 15; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
