var static = require('node-static');

var DEFAULT_PORT = 8000;

var fileServer = new static.Server('../app');
var PORT = process.env.PORT || DEFAULT_PORT;

require('http').createServer(function(request, response) {
  request.addListener('end', function() {
    console.log(request.url);
    fileServer.serve(request, response);
  }).resume();
}).listen(PORT);

console.log('Server started on localhost:%s', PORT);