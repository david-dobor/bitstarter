var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('The first Hello World thing, from the first-or-second lecture');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
