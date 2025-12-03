const { MongoClient } = require("mongodb");
//下のURIをご自分の値に変更してください
const uri = "mongodb+srv://yunseri:abcd1234@cluster0.iuz8qiv.mongodb.net/?appName=Cluster0";
const client = new MongoClient(uri);
async function run() {
const database = client.db('notes');
const notes = database.collection('notes');
//idが２のドキュメントを削除
const note =await notes.deleteOne({id: 2});
console.log(note);
//最後にクロースする
await client.close();
}
run()