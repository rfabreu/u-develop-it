const mysql = require('mysql2');
require("dotenv").config();


// Connect to database
const db = mysql.createConnection(
    {
        // Your MySQL host:
        host: process.env.MYSQL_HOST,
        // Your MySQL username:
        user: process.env.MYSQL_USERNAME,
        // Your MySQL password:
        password: process.env.MYSQL_PASSWORD,
        // Your MySQL database
        database: process.env.MYSQL_DBNAME
    },
    console.log('Connected to the election database.')
);

module.exports = db;