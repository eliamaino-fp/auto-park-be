const express = require('express')
const app = express()
const db = require('./src/services/database-repo.js');
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(require('./src/routes/routes.js'));
app.listen(3000, () => console.log('Example app listening on port 3000!'))
