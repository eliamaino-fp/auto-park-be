const express = require('express')
const router = express.Router()
const areas = require('../controllers/areas.js')

//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', (req, res) => {
  res.send('Auto park home page')
})

router.get('/areas', (req, res) => {
  console.log(areas.getAllAreas);
  res.send(areas.getAllAreas())
})

module.exports = router
