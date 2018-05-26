function getAllAreas() {
  const areas = [
    {
      areaId : '1',
      freeParkingPercentage : 42,
      coordinates: [
          [48.85, 2.4022],
          [48.85, 2.3722],
          [48.81, 2.3722],
          [48.81, 2.43]
      ],
      dropOuts : [
        {
          xCoor : 48.84,
          yCoor : 2.3922
        }
      ]
    },
    {
      areaId : '2',
      freeParkingPercentage : 12,
      coordinates: [
          [48.85, 2.3722],
          [48.85, 2.34228],
          [48.81, 2.3222],
          [48.81, 2.3722]
      ],
      dropOuts : [
        {
          xCoor : 48.835,
          yCoor : 2.3622
        }
      ]
    },
    {
      areaId : '3',
      freeParkingPercentage : 25,
      coordinates: [
          [48.865, 2.43],
          [48.86, 2.4022],
          [48.85, 2.4022],
          [48.81, 2.43]
      ],
      dropOuts : []
    },
    {
      areaId : '4',
      freeParkingPercentage : 77,
      coordinates: [
          [48.865, 2.43],
          [48.86, 2.4022],
          [48.85, 2.4022],
      ],
      dropOuts : []
    },
    {
      areaId : '5',
      freeParkingPercentage : 90,
      coordinates: [
          [48.845, 2.2922],
          [48.85, 2.34228],
          [48.81, 2.3222],
      ],
      dropOuts : [
        {
          xCoor : 48.828,
          yCoor : 2.3122
        },
        {
          xCoor : 48.83,
          yCoor : 2.3222
        }
      ]
    },
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
