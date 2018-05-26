const areas = require('../controllers/areas.js')

function getBestDistance(req, cb) {
  // We take into account that after the dropout point the path will be chaper
  const START_TO_DROPOUT = 50000
  const DROPOUT_TO_DEST = 30000

  const dropouts = areas.getAllDropOuts((err, dropouts) => {
    if (err) {
      cb('Best distance calculation failed')
    }

    const start = {
      xCoor: req.query.sx,
      yCoor: req.query.sy
    }
    const dest = {
        xCoor: req.query.dx,
        yCoor: req.query.dy
    }
    let bestDistance = Number.MAX_SAFE_INTEGER
    let bestDropout = null
    let dropoutCount = 1
    let bestDropoutCount = 1

    dropouts.forEach(dropout => {
      const firstDistance = areas.getDistance(start, dropout) * START_TO_DROPOUT
      const secondDistance = areas.getDistance(dropout, dest) * DROPOUT_TO_DEST

      const totalDistance = firstDistance + secondDistance

      const distanceAndParking = totalDistance + dropout.areaValue

      if (distanceAndParking < bestDistance) {
        bestDistance = distanceAndParking;
        bestDropout = dropout;
        bestDropoutCount = dropoutCount
      }
      dropoutCount++
    })

    bestDropout.number = bestDropoutCount
    cb(null, bestDropout)
  })
}

module.exports = {
  getBestDistance
}
