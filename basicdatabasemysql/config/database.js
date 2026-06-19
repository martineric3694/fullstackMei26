const mysql = require("mysql2/promise");

let pool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"root",
    database:"belajar_js",
    waitForConnections:true,
    connectionLimit:10
});

module.exports = {pool};