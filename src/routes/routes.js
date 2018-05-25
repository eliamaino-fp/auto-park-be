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
  res.send(areas.getAllAreas())
})

router.get('/dropouts', (req, res) => {
  res.send(areas.getAllDropOuts())
})

router.get('/get-distance/:x/:y', (req, res) => {
  const dropouts = areas.getAllDropOuts()
  console.log(req.params);
  res.send(areas.getAllDropOuts())
})

module.exports = router
