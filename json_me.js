var express = require('express');
var app = express();
var url = require('url');

app.get('/search', function(req, res) {
  var parsedURL = url.parse(req.url, true);
  res.send(JSON.stringify(parsedURL.query));
});

app.listen(process.argv[2]);