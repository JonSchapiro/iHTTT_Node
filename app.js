var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());

app.post('/api/call/:callerName', function (req, res) {
  console.log(req.body)
  console.log(req.body.callDelay)
  console.log(req.body.callRepeat)

  res.status(200);
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Cruisin on port 3000');
});