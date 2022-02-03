const express = require('express');
const Datastore = require('nedb');
const app = express();
//const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));//allowing server ot parse json in requests

const database = new Datastore('database.db');
database.loadDatabase();
//database.insert({name: 'broo',status: ' brilliant!!'});
//database.insert({name: 'grayyer',status: ' monologous!!'});

app.get('/api',(request,response)=>{
  //response.json({test: 123});
  database.find({},(err,data)=>{
    if(err){
      response.end();
      return;
    }
    
     response.json(data);
  });
  
});

app.post('/api',(request,response)=> {
  console.log('receiving request!');
  //console.log(request.body);
  const data = request.body;
  
  const timestamp = Date.now();
  data.timestamp = timestamp;

  database.insert(data);
  response.json(data);
  /*response.json({
    status:'success',
    latitude: data.lat,
    longitude: data.lon,
    timestamp: timestamp
  }); */
}); 