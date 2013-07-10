var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
<<<<<<< HEAD
  response.send('Hello World 2!');
=======
  response.send('The first Hello World thing, from the first-or-second lecture');
>>>>>>> 6a4fadd6d205f2600efea597f41c2d5f2950468b
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
