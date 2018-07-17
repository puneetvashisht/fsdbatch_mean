const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
app.use(cors())

var courses = [
    {"title": "Angular!", "summary":"Framework by google!!"},
    {"title": "React!", "summary":"Library by facebook!!"}
]

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/courses', (req, res) =>res.json(courses));


// We focus on delete method first. Let's test using postman
app.delete('/courses/:id', (req,res)=>{
    var index = req.params.id
    console.log(index);
    courses.splice(index, 1);
    res.status(200).json({message: "Course is Deleted!!"})
})

//

app.post('/courses', (req, res) =>{
    var course = req.body;
    console.log(course);
    courses.push(course);
    // res.json(courses);
    res.status(201).json({message: "Course is Added!!"})

});

app.listen(3000, () => console.log('Example app listening on port 3000!'))