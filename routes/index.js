var express = require('express');
var router = express.Router();
var fs = require('fs');
var request = require('request');
var cities = [];
/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile('weather.html', { root: 'public' });
});

router.get('/getcity',function(req,res,next) {
    console.log("In getcity route");
    var myRe = new RegExp("^" + req.query.q);
    console.log("This is myRe");
    console.log(myRe);
    var jsonresult = [];
    for(var i = 0; i < cities.length; i++) {
        var result = cities[i].search(myRe);
        if(result != -1) {
            console.log(cities[i]);
            jsonresult.push({city:cities[i]});
        }
    }



    res.status(200).json(jsonresult);
});

router.get('/owlbot', function(req,res) {
    console.log("In politics");
    var politics = "https://owlbot.info/api/v1/dictionary/" + req.query.w;
    request(politics).pipe(res);
});


    fs.readFile(__dirname + '/cities.dat.txt',function(err,data) {
     if(err) throw err;
     cities = data.toString().split("\n");
    });

module.exports = router;
