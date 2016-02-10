var http = require('http');

var server = http.createServer(function(request, response){
	if(request.url === '/'){
		response.writeHead(200,{"Content-type":"text/html"});
		response.end("hello <strong>world</strong>");
	}else if (request.url === '/goodbye'){
		if(request.method === 'GET'){
			response.writeHead(200,{"Content-type":"text/html"});
			response.end("goodbye <strong>world</strong>");
		}else if(request.method === 'POST'){
			response.writeHead(200,{"Content-type":"text/html"});
			response.end("Posting goodbye cruel world");
		}

	}
});

server.listen(3000);