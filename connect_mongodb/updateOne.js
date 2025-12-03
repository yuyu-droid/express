const { MongoClient } = require("mongodb");
//下のURIをご自分の値に変更してください
const uri = "mongodb+srv://yunseri:abcd1234@cluster0.iuz8qiv.mongodb.net/?appName=Cluster0";
const client = new MongoClient(uri);
async function run() {
const database = client.db('notes');
const movies = database.collection('notes');
//idが１のデータを更新
const movie = await movies.replaceOne(
{
id: 1,
title:'ノート１のタイトルです',
subTitle:'ノート１のサブタイトルです',
bodyText:'ノート１の本文です'
},
{
id: 1,
title:'ノート1のタイトル更新しました',
subTitle:'ノート1のサブタイトルです',
bodyText:'ノート1の本文です'
});
console.log(movie);
//最後にクロースする
await client.close();
}
run()