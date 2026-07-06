const mysql = require('mysql2');
require('dotenv').config();

// Membuat koneksi ke database MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_NAME || 'auth_db',
  port: process.env.DB_PORT || 3306
});

// Koneksi ke database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err.message);
    return;
  }
  console.log('Connected to MySQL database');
});

module.exports = db;
