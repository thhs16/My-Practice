const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://root:toor@testcluster.itzo8sn.mongodb.net/?retryWrites=true&w=majority";

          MongoClient.connect(url, async function(err, db){
                    if(err) throw err;
                    var dbo = db.db('3Dlottery');
                    var mydata = '';

                    const collection = dbo.collection('3Dnum');
                    var result = await collection.find({num:400}).toArray();
                    console.log(result);
          })
