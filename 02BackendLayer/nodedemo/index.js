const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const repo = require('./repos/categorym');
// const categories = [{ name: "Running" }]

app.use(express.static('files'))
app.set('views', './views')
app.set('view engine', 'pug')
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/ssr', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
  })

app.get('/categories', (req, res) => {
    repo.fetchCategories(null, (err, docs)=>{
        console.log(docs)
        res.json(docs);
    }) 
})



app.get('/categories/:categoryName', (req, res) => {
    
    console.log(req.params.categoryName);
    var categoryName = req.params.categoryName
    repo.fetchCategoryByName(categoryName, (err, category)=>{
        res.json(category);
    })
    // repo.fetchCategories(categoryName, (err, docs)=>{
    //     console.log(docs)
    //     // res.json(docs);
    //     var cName = docs[0].categoryName;
    //     var cDate = docs[0].createdDt;
    //     console.log(cName)
    //     res.render('category', {title: 'Category', categoryname:cName, createddt: cDate})
    // }) 
})

app.post('/category', (req,res) => {
    console.log('Inserting one category');

    var category = req.body;
    console.log(category)
    // console.log(category);
    repo.addCategory(category, (err, docs)=>{
        if(err){
            console.log("Error message ", err.message);
            res.status(501).json({message: err.message});
        }
        else{
            console.log(docs)
            res.json(docs);
        }
        
    })
    // res.json(category)
})



app.listen(3000, () => console.log('Listening on 3000'))



// Use connect method to connect to the server
