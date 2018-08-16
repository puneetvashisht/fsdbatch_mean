const mongoose = require('mongoose');
const Category = require('../entity/category')

mongoose.connect('mongodb://localhost/workout');

function addCategory(category, callback){
        var cm = new Category(category);
        cm.save((err, docs)=>{
            if(err) throw err;
            callback(null, {"message": "Successfully inserted category!!" });
            // if(err){
            //     // callback(err, null);
            // }
            // else{
            //     callback(null, {"message": "Successfully inserted category!!" });
            // }
           
        })
}

function fetchCategories(categoryName, callback){
    Category.find((err, categories)=>{
        console.log(categories);
        callback(null, categories)
    })
}

function fetchCategoryByName(categoryName, callback){
    Category.findOne({categoryName: categoryName}, (err, category)=>{
        console.log(category);
        callback(null, category)
    })
}
module.exports = {addCategory, fetchCategories, fetchCategoryByName};