const http = require('http')
const fs = require('fs');

var data = fs.readFileSync('./config.json')
const config = JSON.parse(data);
console.log(config.port)

var server = http.createServer((req, res)=> {
    console.log(req.method)
    console.log(req.url);

    fs.readFile('files'+ req.url, (err, data)=>{
        console.log('Contents: ' + data);
        if(data == undefined){
            res.writeHead(404); 
            res.end("No content available")
        }
        else{
            console.log('******test*****')
            res.writeHead(200,{'Content-type':'text/html'});
            // res.writeHead()
            res.write(''+ data);
            res.end();
        }
       
    })
    
})

server.listen(config.port, ()=> { console.log ('listening on port: ', config.port)});