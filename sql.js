 //vegibit.com/render-html-in-node-js/

//replit.com/talk/learn/Create-Account-Database-MySQL-nodejs/20263

/*var mysql = require('mysql');

var con = mysql.createConnection({
  host: "remotemysql.com",
  user: "blUqVPKNsO",
  password: "jaoG4anq0g",
database:"blUqVPKNsO"
});

con.connect(function(err) {
  if (err){
console.log(err)
return
}
  console.log("Connected to database!");
});*/

mysql = require("mysql");
let con;

function remoConnection (){
  con = mysql.createPool({     
  host: "remotemysql.com",
  user: "blUqVPKNsO",
  password: "jaoG4anq0g",
  database:"blUqVPKNsO"
 });

 con.getConnection(function(err) {
  if (err) throw err;
  console.log("Connected to pool database!");
 });
}

let sql = 'SHOW TABLES';

let sql1 = `INSERT INTO employee (id,name,gender,age,category,tel) VALUES (${mysql.escape("0007")},${mysql.escape("Kipyegon")},${mysql.escape("Male")},${mysql.escape("23")},${mysql.escape("Data Science")},${mysql.escape("07222222222")})`;

let sql2 = `SELECT * FROM Account WHERE Username = ${mysql.escape("theusername")}`;

let sql3 = `SELECT * FROM employee`;

remoConnection();
/*con.query(sql1,(err)=>{
  if(err){
    throw err
    return
  }
  console.log("Row inserted")
})*/

con.query(sql3,(err,result)=>{
  if(err){
    throw err
  }
  console.log(result)
});