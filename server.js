const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectID
const url = 'mongodb://autopark:AXmTqYzyv13IS313MARx6dwcxr5hTAkfTAWk6AOtEPM8nQctUoLkaIW0cHPGtKxVtgzdy4CTcEOkvGerb8yHFA%3D%3D@autopark.documents.azure.com:10255/?ssl=true';

MongoClient.connect(url, (err, client) => {
  if (err) {
    console.log('Error' + err);
  }
  console.log('Connected');
  console.log('Client' + client.isConnected());
});
app.use(require('./src/routes/routes.js'));
app.listen(3000, () => console.log('Example app listening on port 3000!'))
