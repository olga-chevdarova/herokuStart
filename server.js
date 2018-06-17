const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
    return res.send("<h1>Главная страница</h1>");
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.get("/", function(request, response){

    response.send("<h1>Главная страница</h1>");
});

app.listen(process.env.PORT || 8080);