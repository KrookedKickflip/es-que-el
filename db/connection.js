const express = require('express');
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;
const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "arriah1841",
  database: "trackemployees_db"
},
console.log('Connected to the amployees DB')
);

db.connect((error) => {
    if (error) {
      console.log('Error connecting to the Database');
      return;
    }
    console.log('Connected to MySql DB');
  });

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

module.exports = db;