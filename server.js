var http = require('http');

var server = http.createServer(function(request, response){
	response.writeHead(200,{"Content-type":"text/html"});
	response.end("hello <strong>world</strong>");
});

server.listen(3000);