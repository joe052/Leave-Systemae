/*const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});*/

//https://levelup.gitconnected.com/running-sql-queries-from-an-sql-file-in-a-nodejs-app-sqlite-a927f0e8a545
function halt (){
const sqlite3 = require('sqlite3');
const fs = require('fs');

const dataSql = fs.readFileSync('./data.sql').toString();

let db = new sqlite3.Database('mydatabase', (err) => {
   if (err){
       return console.error(err.message);
   }
   console.log('Connected to the in-memory SQlite database.');
});
//converting the sql string to array for us to run them one by one
const dataArr = dataSql.toString().split(');');

// db.serialize ensures that your queries are one after the other depending on which one came first in your `dataArr`
db.serialize(() => {
  // db.run runs your SQL query against the DB
  db.run('PRAGMA foreign_keys=OFF;');
  db.run('BEGIN TRANSACTION;');
  // Loop through the `dataArr` and db.run each query
  dataArr.forEach((query) => {
    if(query) {
      // Add the delimiter back to each query before you run them
      // In my case the it was `);`
      query += ');';
      db.run(query, (err) => {
         if(err) throw err;
      });
    }
  });
  db.run('COMMIT;');
});
// Close the DB connection
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Closed the database connection.');
});
}

const Database = require("@replit/database")
const db = new Database()
db.set("key", "value").then(() => {});
db.get("key").then(value => {});
db.delete("key").then(() => {});
db.list().then(keys => {});


//const hello = document.querySelector("#hello").innerHtml