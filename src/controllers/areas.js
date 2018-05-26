const database = require('../services/database-repo.js');

function getAllAreas(cb) {
  database.getAreas(function(err, areas) {
    if (err) {
      return cb(err)
    }
    return cb(null, areas)
  })
}

function getAllDropOuts(cb) {
  const areas = getAllAreas((err, areas) => {
    if (err) {
      return cb(err)
    }

    const dropOuts = []

    areas.forEach(area => {
      if (area.dropOuts && area.dropOuts.length > 0) {
        area.dropOuts.forEach(dropOut => {
          dropOut.areaValue = area.freeParkingPercentage
          dropOuts.push(dropOut)
        })
      }
    })

    return cb(null,dropOuts);
  })
}

function getDistance(startingPoint, endingPoint) {
    const a = startingPoint.xCoor - endingPoint.xCoor
    const b = startingPoint.yCoor - endingPoint.yCoor

    return Math.sqrt(a * a + b * b);
}

module.exports = {
    getDistance,
    getAllAreas,
    getAllDropOuts
}
