const express = require('express')
const app = express()
const db = require('./src/services/database-repo.js');
//db.connect();
app.use(require('./src/routes/routes.js'));
app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port 3000!'))