//server for index2.html
const express = require('express');
let fs = require('fs');

const app = express();
const port = 8000;

app.use(express.static('sub-project'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});









/*
//const sub = require('../sub-project/main.js');

//the two lines below are very important
//app.set('views', __dirname + '/views');
//app.engine('html', require('ejs').renderFile);
//app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.use(express.static(__dirname));


app.get('/index', function (req, res)
{
    res.render('index.html');
    //res.render('style.css');
});

***app.post('/deliver', function(req, res){
return res.redirect('tester.html')
});***

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});*/
