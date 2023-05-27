const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "arriah1841",
  database: "employees"
},
console.log('Connected to the amployees DB')
);

connection.connect((error) => {
    if (error) {
      console.log('Error connecting to the Database');
      return;
    }
    console.log('Connected to MySql DB');
  });

module.exports = connection;