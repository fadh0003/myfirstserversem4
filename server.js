// http
var http = require('http');

var server = http.createServer(function(req, res){
    res.writeHead(200, {'content-type' : 'text/json'});
    res.write('{ "title" : " Hello jason web api", "text" : "text fra min api" }');
    res.end();
});

server.listen(3003);
