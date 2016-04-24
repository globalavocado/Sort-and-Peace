var express = require('express');
var app = express();
var http = require('http');

var server = http.createServer(app);

app.set('view engine', 'ejs');

app.use(express.static(process.cwd() + '/public'));

app.get('/', function(request, response) {
  response.render('index');
});

server.listen(3000, function() {
  console.log("Server listening on port 3000");
});

module.exports = server;