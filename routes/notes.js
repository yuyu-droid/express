var express = require('express');
var router = express.Router();

// レスポンスのデータ（ノート全権）
const responseObjectDataAll = {
    textObject1 : {
        id: 1,
        title: 'ノート1のタイトルです',
        subTitle: 'ノート１のサブタイトルです',
        bodyText: 'ノート１の本文です'
    },
    textObject2 : {
        id: 2,
        title: 'ノート2のタイトルです',
        subTitle: 'ノート2のサブタイトルです',
        bodyText: 'ノート2の本文です'
    },
};

/**
 *  メモを全権取得するAPI
 *  @returns {Object[]} data
 *  @returns {number} data.id - ID
 *  @returns {string} datal.title - タイトル
 *  @returns {string} data.text - 内容
 */
router.get('/', function (req, res, next) {
    // 全権取得して返す
    res.json(responseObjectDataAll);
})

module.exports = router;