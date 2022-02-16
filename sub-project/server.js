const express = require('express');
const app = express();
const mysql = require("mysql");

let con;
remoConnection();   //calling connection
//conProof();


//creating database connection
function remoConnection (){
  con = mysql.createPool({     
  host: "remotemysql.com",
  user: "blUqVPKNsO",
  password: "jaoG4anq0g",
  database:"blUqVPKNsO"
  });

  //checking if connection was successful
  con.getConnection((err) => {
  if (err) throw err;
  console.log("Connected to pool database!");
 });
}

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({limit: '5000mb', extended: true, parameterLimit: 100000000000}));

const port = 8000;
app.use(express.static('sub-project'));
app.use(express.json({limit: '1mb'}));

app.listen(port,()=>{
  console.log(`App here listening at http://localhost:${port}`);
});

app.post('/deliver',(request,response)=>{
  console.log('receiving request!');
  console.log(request.body);
  const data = request.body;
 
 //sql query
 let sql = `INSERT INTO employee (id,name,gender,age,category,tel) VALUES (${mysql.escape(data.id)},${mysql.escape(data.name)},${mysql.escape(data.gender)},${mysql.escape(data.age)},${mysql.escape(data.category)},${mysql.escape(data.tel)})`;

 con.query(sql,(err)=>{
  if(err){
    throw err
    return
  }
  console.log("Row inserted");
  //conProof();
  response.send("New employee has been added into the database with ID = "+data.id+ " and Name = "+data.name);
 });
});//end of post

app.get("/info",(request,response)=>{
  let sql = 'SELECT * FROM employee';
  con.query(sql,(err,result)=>{
    if(err)
      throw err
  response.json(result);
  });
});

app.post('/delete',(request,response)=>{
  console.log("receiving request....");
  console.log(request.body);
  const data = request.body;

  let sql = `DELETE FROM employee where id = ${data.id}`;

  con.query(sql,(err)=>{
    if(err){
     throw err;
     return
    }
    console.log("Row deleted!");
    response.redirect("index.html");
    //alert(`${data.id} deleted`);
  });
});

function conProof(){
  let sql = `SELECT * FROM employee`;
  
  con.query(sql,(err,result)=>{
  if(err){
    throw err
  }
  console.log(result)
 });  
}