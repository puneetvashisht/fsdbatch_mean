const MongoClient = require('mongodb').MongoClient;
// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'workout';
function fetchCategories(categoryName, callback){
    MongoClient.connect(url, function (err, client) {
        console.log("Connected successfully to server");
        const db = client.db(dbName);
        const collection = db.collection('categories');
        var obj = {}
        if(categoryName && categoryName!=''){
             obj.categoryName = categoryName
        }
        collection.find(obj).toArray(function (err, docs) {
            console.log("Found the following records");
            // console.log(docs)
            callback(null,docs);           
        }); 
    });
}

function addCategory(category, callback){
    MongoClient.connect(url, function (err, client) {
        console.log("Connected successfully to server");
        const db = client.db(dbName);
        const collection = db.collection('categories');
        collection.insertOne(category, (err, docs)=>{
            if(err) callback(err, null);
            callback(null, {"message": "Successfully inserted category" + category })
        })
    });
}

module.exports = {fetchCategories, addCategory};