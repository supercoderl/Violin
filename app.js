var express = require("express");
var cors = require('cors');
require('dotenv').config();

var app = express();
const path = require("path");
var port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('js'));

app.use('/api/payment', require('./routes/payment'));

app.get('/payment/callback', function (req, res) {
    res.sendFile(path.join(__dirname + '/pages/payment/index.html'));
});
app.get('/default', function (req, res) {
    res.sendFile(path.join(__dirname + '/pages/default/index.html'));
});

app.use(express.static(__dirname + '/pages'));
app.use(express.static(__dirname + '/pages/default'));
app.use(express.static(path.join(__dirname, 'pages')));

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});