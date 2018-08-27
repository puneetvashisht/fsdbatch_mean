var express = require('express');
var app = express();
var cors = require('cors');

var bodyParser = require('body-parser');

app.use(cors());
app.options('*', cors());

app.use(express.static(__dirname+"/dist"));
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(8080, 'localhost', function(){
	console.log("Node is running at localhost:8080");
});



var employees = [
    {
        "name": "Joe Root",
        "role": "Software Developer"
    },
    {
        "name": "Wille Waite",
        "role": "Administrator"
    }

]

app.get('/employees', function(req, res){
    res.json(employees)
})

app.post('/employees', function(req, res){
	console.log(req.body)
	employees.push(req.body);
	res.json({success: true})
})
