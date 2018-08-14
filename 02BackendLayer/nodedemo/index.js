const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const fs = require('fs')
const path = require('path')
const categoryRoutes = require('./routes')


// const categories = [{ name: "Running" }]
app.use(express.static('files'))
app.use(cors());
// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'app.log'), {flags: 'a'})

// setup the logger
app.use(morgan('combined', {stream: accessLogStream}))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.set('views', './views')
app.set('view engine', 'pug')

console.log(__dirname);
console.log(__filename);

//Category routes
categoryRoutes(app);

//Other entities routes
app.get('/ssr', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
})





app.listen(3000, () => console.log('Listening on 3000'))



// Use connect method to connect to the server
