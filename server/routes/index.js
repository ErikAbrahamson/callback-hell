var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');

router.get('/data', function(req, res) {
  request('https://news.ycombinator.com/', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      $ = cheerio.load(body);
      var title = $('tr.athing td.title a').eq(0).text();
      res.render('index', { hnews: title });
      console.log(title);
    }
  });
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
