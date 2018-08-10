const express = require('express')
const app = express();
const bodyParser = require('body-parser')
// const cors = require('cors')
const repo = require('./repos/category');
// const categories = [{ name: "Running" }]

app.use(express.static('files'))
app.set('views', './views')
app.set('view engine', 'pug')
// app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/ssr', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
  })

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
        // res.json(docs);
        var cName = docs[0].categoryName;
        var cDate = docs[0].createdDt;
        console.log(cName)
        res.render('category', {title: 'Category', categoryname:cName, createddt: cDate})
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
