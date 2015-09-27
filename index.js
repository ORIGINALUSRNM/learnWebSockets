var express = require('express');  
var app = express();  
var server = require('http').createServer(app);  
var io = require('socket.io')(server);
var fs = require('fs');

app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/src'));

app.get('/', function(req, res,next) {  
    res.sendFile(__dirname + '/index.html');
});

server.listen(3000, function () {
	console.log('web sockets in da house!');
});

fs.watchFile('data.json', function (curr, prev) {
	fs.readFile('data.json', 'utf8', function (err, data) {
		if(err) throw err;
		io.sockets.emit('stock.data', data);
	});
});

io.on('connection', function (socket) {
	console.log('user connected');

	fs.readFile('data.json', 'utf8', function (err, data) {
		if(err) throw err;
		socket.emit('stock.data', data);
	});

});


