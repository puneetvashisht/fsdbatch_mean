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

// app.delete('/courses/:id', (req,res)=>{
//     console.log(req.params.id);
//     courses.splice(id, 1);
// })


app.post('/courses', (req, res) =>{
    var course = req.body;
    console.log(course);
    courses.push(course);
    // res.json(courses);
    res.status(201).json({message: "Course is Added!!"})

});

app.listen(3000, () => console.log('Example app listening on port 3000!'))