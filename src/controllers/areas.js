function getAllAreas() {
  const areas = [
    {
      areaId : '1',
      freeParkingPercentage : 17,
      dropOuts : [
        {
          xCoor : 250,
          yCoor : 198
        },
        {
          xCoor : 150,
          yCoor : 33
        }
      ]
    },
    {
      areaId : '2',
      freeParkingPercentage : 41,
      dropOuts : [
        {
          xCoor : 12,
          yCoor : 77
        },
        {
          xCoor : 75,
          yCoor : 52
        }
      ]
    }
  ]

  return areas
}

function getAllDropOuts() {
  const areas = getAllAreas()
  const dropOuts = []

  areas.forEach(area => {
    if (area.dropOuts && area.dropOuts.length > 0) {
      area.dropOuts.forEach(dropOut => {
        dropOut.areaValue = area.freeParkingPercentage
        dropOuts.push(dropOut)
      })
    }
  })

  return dropOuts
}

function getDistance(startingPoint, endingPoint) {
  const a = startingPoint.xCoor - endingPoint.xCoor
  const b = startingPoint.yCoor - endingPoint.yCoor

  return Math.sqrt( a*a + b*b );
}

module.exports = {
  getDistance,
  getAllAreas,
  getAllDropOuts
}
