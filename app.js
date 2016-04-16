var express = require('express');
var app = express();

app.get('/api/call/:callerName', function (req, res) {
  res.status(200);
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Cruisin on port 3000');
});