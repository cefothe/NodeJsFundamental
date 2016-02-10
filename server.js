var http = require('http');

var server = http.createServer(function(request, response){
	if(request.url === '/'){
		response.writeHead(200,{"Content-type":"text/html"});
		response.end("hello <strong>world</strong>");
	}else if (request.url === '/goodbye'){
		response.writeHead(200,{"Content-type":"text/html"});
		response.end("goodbye <strong>world</strong>");
	}
});

server.listen(3000);