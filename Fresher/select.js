var mysql = require('mysql');  
var con = mysql.createConnection({  
host: "localhost",  
user: "root",  
password: "",  
database: "nodefirstdb"  
});  
con.connect(function(err) {  
if (err) throw err;  
con.query("SELECT * FROM nodefirstdb", function (err, result) {  
if (err) throw err;  
console.log(result);  
});  
});  