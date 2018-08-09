const express = require('express')
const app = express();
const bodyParser = require('body-parser')
// const cors = require('cors')
const repo = require('./repos/category');
// const categories = [{ name: "Running" }]

app.use(express.static('files'))
// app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/categories', (req, res) => {
    // Not passible boz asynch nature
    // var docs = fetchCategories()
    repo.fetchCategories(null, (err, docs)=>{
        console.log(docs)
        res.json(docs);
    }) 
})

app.get('/categories/:categoryName', (req, res) => {
    // Not passible boz asynch nature
    // var docs = fetchCategories()
    console.log(req.params.categoryName);
    var categoryName = req.params.categoryName
    repo.fetchCategories(categoryName, (err, docs)=>{
        console.log(docs)
        res.json(docs);
    }) 
})

app.post('/category', (req,res) => {
    console.log('Inserting one category');
    // var category = {  
    //     "categoryName" : "Test",
    //     "createdDt" : new Date() 
    // }
    var category = req.body;
    console.log(category)
    category.createdDt = new Date();

    // console.log(category);
    repo.addCategory(category, (err, docs)=>{
        console.log(docs)
        res.json(docs);
    })
    // res.json(category)
})



app.listen(3000, () => console.log('Listening on 3000'))



// Use connect method to connect to the server
