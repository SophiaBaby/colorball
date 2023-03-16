var express = require('express');

var app = express();

var http = require('http').Server(app);

var bodyParser = require('body-parser');

app.use(bodyParser());

app.use(express.json());

app.use(express.static(__dirname + ''));

app.get('/', function(req, res){
    res.render('index', {});
});

app.get('/api/timeout', function(req, res){
    setTimeout(() => {
    res.send("i don't see a lot of PUT requests anymore")

    }, 60 * 10 * 1000)// 这里设置服务器的响应时间

});

http.listen(3004, function(){
    console.log('http://127.0.0.1:3004');
})；
