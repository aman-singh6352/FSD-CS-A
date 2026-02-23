const promise = require("promise");
const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost/testdb";

MongoClient.connect(url).then((err, data) => {
  Db.collection("Test").updateOne({ name: "Joe" });
}).catch(err) {
    console.log(err.message);
}