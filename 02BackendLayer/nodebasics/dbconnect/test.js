var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'rootroot',
  database : 'cogdb'
});
 
connection.connect();

function fetchAccount(name){
    connection.query('SELECT * from Account where name=?', [name],function (error, results, fields) {
        if (error) throw error;
        console.log(results)
            results.forEach(element => {
                console.log(element.id)
                console.log(element.name)
                console.log(element.balance)
            });
        });
}
 
fetchAccount('Priya')    
 
connection.end();