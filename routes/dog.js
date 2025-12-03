var express = require('express');
var router = express.Router();
var request = require('request');

const DOG_API_URL = 'https//dog.ceo/api/breeds/image/random';

router.get('/', function(req, res, next) {

    request(DOG_API_URL, function (error, response, body) {
    
if (error || response.statusCode !== 200) {
        console.error("Dog API通信エラー:", error);
        res.status(500).json({
            message: "外部APIとの通信中にエラーが発生しました。",
            error: error
        });
        return;
}

const data = JSON.parse(body);

res.json(data);

    });
});

module.exports = router;