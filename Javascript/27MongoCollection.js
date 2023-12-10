var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://root:toor@testcluster.itzo8sn.mongodb.net/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("dbT");
  dbo.createCollection("CTest", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});;
