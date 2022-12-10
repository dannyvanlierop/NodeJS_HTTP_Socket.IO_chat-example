module.exports = function(){
    this.io = require('socket.io')(http);
    io.on('connection', (socket) => {
      socket.on('chat message', msg => {
        io.emit('chat message', msg);
        console.log(`chat message ${msg}`);
      });
    });
};