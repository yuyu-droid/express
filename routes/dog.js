const fetch = require('node-fetch');
var express = require('express');
var router = express.Router();

const DOG_API_URL = 'https//dog.ceo/api/breeds/image/random';

router.get('/', async (req, res) => {
    
    try {
        const response = await fetch(DOG_API_URL);
        const data = await response.json();


            res.json({
                message:"Dog APIのデータを取得しました。",
                dogImageUrl: data.message,
                status: data.status
        });

    } catch (error) {
        console.error("Dog API通信エラー:", error);
        res.status(500).json({
            message: "外部APIとの通信中にエラーが発生しました。",
            error: error.message
        });
    }
});

module.exports = router;