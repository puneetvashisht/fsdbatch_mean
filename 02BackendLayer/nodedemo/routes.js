const repo = require('./repos/categorym');

const routes = (app) => {
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
}
module.exports = routes

