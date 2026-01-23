const { MongoClient } = require("mongodb");
// 下のURIをご自身の値に変更してください
const uri = "mongodb+srv://yunseri:Aqours0619@cluster0.iuz8qiv.mongodb.net/?appName=Cluster0";
const client = new MongoClient(uri);

var express = require('express');
var router = express.Router();

router.get('/', async (req, res) => {
    await client.connect();
    const database = client.db('notes');
    const notes = database.collection('notes');
    const query = {};
    const note = await notes.find(query).toArray();
    res.json(note);
});

module.exports = router;
