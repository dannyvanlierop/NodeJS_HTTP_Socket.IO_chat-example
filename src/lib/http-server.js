module.exports = function(){
    //this.path_Public = __dirname + '/index.html';
    this.path_Public = './public/';
    this.port = process.env.PORT || 80;
    this.app = require('express')();
    this.http = require('http').Server(app);
    app.get('/', (req, res) => {
      res.sendFile('index.html',{root:path_Public});
    });
    http.listen(port, () => {
        console.log(`Socket.IO server running at http://localhost:${port}/`);
    });
};