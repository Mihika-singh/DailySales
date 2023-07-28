 
const mysql = require('mysql2');
// MySQL database connection
const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
password:"Mihika@123",
database:"mysql",
port: 3300,
});
module.exports=connection;