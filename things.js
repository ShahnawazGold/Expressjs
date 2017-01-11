

var express = require('express');
var router = express.Router();

router.get('/hello', function (req, res) {
    res.send("shah gold");
});

router.post('/hello', function (req,res) {
    res.send("gold james");
});


module.exports =router;