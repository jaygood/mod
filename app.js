var express = require('express');
var app = express();

//Create a static file server
app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 8080;
app.listen(port);
console.log('Express server started on port %s', port);
