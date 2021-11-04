var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  var q = url.parse(req.url, true).query;
  var txt = 'Kata kunci: ' + q.keyword;
  res.end(txt);
});

server.listen(8000);

console.log("server running on http://localhost:8000");
