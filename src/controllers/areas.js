function getAllAreas() {
  const areas = [
    {
      areaId : '1',
      freeParkingPercentage : '17%',
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
      freeParkingPercentage : '41%',
      dropOuts : [
        {
          xCoor : 12,
          yCoor : 77
        }
      ]
    }
  ]

  return areas
}

module.exports = {
  getAllAreas
}
