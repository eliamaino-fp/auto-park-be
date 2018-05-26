const express = require('express')
const router = express.Router()
const areas = require('../controllers/areas.js')
const distance = require('../controllers/distance')

router.get('/', (req, res) => {
  res.send('Auto park home page')
})

router.get('/areas', (req, res) => {
  areas.getAllAreas((err, areas) => {
    if (err) {
      throw new Error('Areas fetching failed')
    }
    res.send(areas)
  })
})

router.get('/dropouts', (req, res) => {
  areas.getAllDropOuts((err, dropouts) => {
    if (err) {
      throw new Error('Dropouts fetching failed')
    }
    res.send(dropouts)
  })
})

router.get('/get-best-distance', (req, res) => {
  distance.getBestDistance(req, (err, bestDropout) => {
    if (err) {
      throw new Error(err)
    }

    res.send(bestDropout)
  })
})

module.exports = router
