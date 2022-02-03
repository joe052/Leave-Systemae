//www.sqlitetutorial.net/sqlite-nodejs/connect/
//www.sqlitetutorial.net/sqlite-nodejs/

const sqlite = require('sqlite3').verbose();
let db = new sqlite.Database('./db/sample.db',(err)=>{
if (err){
  return console.error(err.message);
}
console.log('connected to the in memory of the database')
});

let querr = 'CREATE TABLE employer(id TEXT PRIMARY KEY,name TEXT NOT NULL,gender TEXT NOT NULL,AGE INTEGER NOT NULL);';

let querr2 = 'INSERT INTO employer(id,name,gender,AGE) VALUES(?,?,?,?);';

db.run(querr,function (err){
  if (err){
  return console.error(err.message);
  }else
    console.log('Table created');
});

db.run(querr2,[2345,'joe','male',19],function (err){
  if (err){
  return console.error(err.message);
  }
  console.log(`A row has been inserted with rowid ${this.lastID}`);
});

db.close();

