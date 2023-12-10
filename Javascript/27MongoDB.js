
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://root:toor@testcluster.itzo8sn.mongodb.net/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
