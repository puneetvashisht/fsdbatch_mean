const express = require('express')

var app = express();
courses = [
    {title: 'Angular', summary: 'Google framework!!'},
    {title: 'React', summary: 'Facebook library!!'}
]

app.get('/courses', (req, res)=>{
    res.json(courses)
})

app.listen(3000);