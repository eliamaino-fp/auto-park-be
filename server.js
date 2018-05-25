const express = require('express')
const app = express()
require('./src/routes/routes.js')

app.listen(3000, () => console.log('Example app listening on port 3000!'))
