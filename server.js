const express = require('express');
const mysql = require('mysql2');
require("dotenv").config();

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Connect to database
const db = mysql.createConnection(
    {
        host: process.env.MYSQL_HOST,
        // Your MySQL username:
        user: process.env.MYSQL_USERNAME,
        // Your MySQL password
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DBNAME
    },
    console.log('Connected to the election database.')
);

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});


// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
