const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'workout';
 
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
 
  const db = client.db(dbName);
  
//    var newCategory =  {	
// 	"categoryName" : "Swimming",
//     "createdDt" : new Date(),
//     "subcategory": ["Backstroke", "Butterfly"]
//     }

  const collection = db.collection('categories');
//   collection.insertOne(newCategory, (err, result)=>{
//     if(err) throw err;
//     console.log(result)
//     client.close();
//   })

collection.find({categoryName: 'Swimming'}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    // callback(docs);
  });
  
});

