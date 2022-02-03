const express = require('express');
const app = express();
const port = 9000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

app.use(express.static('project-one'));
//app.use(express.json({limit: '1mb'}));//allowing server ot parse json in requests

app.get('/index', function (req, res)
{
    //res.render('index.html');
    //res.render('base.html');
    //res.render('style.css');
});

app.post('/deliver', function(req, res){
 console.log(req.body);
 return res.redirect('tester.html')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

