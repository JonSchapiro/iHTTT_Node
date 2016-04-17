var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Config = require('./config')
var client = require('twilio')(Config.sid,Config.token);



app.use(bodyParser.urlencoded());

app.post('/api/call/:callerName', function (req, res) {
  console.log(req.body)
  console.log(req.body.callDelay)
  console.log(req.body.callRepeat)
  var url = 'http://demo.twilio.com/docs/voice.xml';
  client.makeCall({
        to: '+15612519337',
        from: Config.number,
        url: url
    }, function(err, message) {
        console.log(err);
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200);
            res.send({
                message: 'Thank you! We will be calling you shortly.'
            });
        }
    });

  
});

app.post('/outbound', function(req, res) {
        
        res.satus(200)
        res.send('Outbound call received');
    });

app.listen(3000, function () {
  console.log('Cruisin on port 3000');
});