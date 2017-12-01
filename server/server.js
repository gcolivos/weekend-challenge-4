var express = require('express');
var bodyParser = require('body-parser');
// var petdata = require('./routes/petdata');

var app = express();
var port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('server/public'));

// app.use('/petdata', petdata);

app.listen(port, function(){
    console.log('server is listening on port', port);
});