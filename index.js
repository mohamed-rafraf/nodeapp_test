var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello From : Mohamed Ayadi" }');
});

app.get('/welcome', function (req, res) {
    res.send('{ "response": "Hello From the Other Side" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, It works!" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
