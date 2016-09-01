var app     = require('express')();
var http    = require('http').Server(app);
var path    = require('path');

app.use(require('express').static(path.join(__dirname + '/public')));
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'pug');

app.get('/', function(req, res) {
    return res.render('home');
});

http.listen(3000, function() {
    console.log('site running at localhost:3000');
});
