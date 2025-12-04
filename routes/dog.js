var express = require('express');
var router = express.Router();

const https = require('https'); 

// Dog APIのURLを定義
const DOG_API_URL = 'https://dog.ceo/api/breeds/image/random';

router.get('/', function(req, res, next) {
    
    https.get(DOG_API_URL, (apiResponse) => {
        let body = '';
        
        
        apiResponse.on('data', (chunk) => {
            body += chunk;
        });

        
        apiResponse.on('end', () => {
        
            if (apiResponse.statusCode !== 200) {
                console.error("Dog API通信エラー: ステータスコード", apiResponse.statusCode);
                res.status(500).json({
                    message: "外部APIとの通信中にエラーが発生しました。",
                    error: { statusCode: apiResponse.statusCode, body: body }
                });
                return;
            }

            try {

                const data = JSON.parse(body);
                // 取得したデータをそのまま返す（課題の要件)
                res.json(data);
            } catch (e) {
                console.error("JSONパースエラー:", e);
                res.status(500).json({
                    message: "外部APIからの応答を処理中にエラーが発生しました。",
                    error: e
                });
            }
        });
    }).on('error', (e) => {
        // ネットワーク接続自体が失敗した場合の処理
        console.error("Dog API接続エラー:", e);
        res.status(500).json({
            message: "外部APIとの通信中にエラーが発生しました。",
            error: e
        });
    });
});

module.exports = router;