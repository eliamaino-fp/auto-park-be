const express = require('express')
const router = express.Router()
const areas = require('../controllers/areas.js')

router.get('/', (req, res) => {
    res.send('Auto park home page')
})

router.get('/areas', (req, res) => {
    areas.getAllAreas(function(err, areas) {
        res.send(areas)
    })
})

router.get('/dropouts', (req, res) => {
    res.send(areas.getAllDropOuts())
})

router.get('/get-best-distance', (req, res) => {
    // We take into account that after the dropout point the path will be chaper
    const START_TO_DROPOUT = 5
    const DROPOUT_TO_DEST = 3

    const dropouts = areas.getAllDropOuts()
    const start = {
        xCoor: req.query.sx,
        yCoor: req.query.sy
    }
    const dest = {
        xCoor: req.query.dx,
        yCoor: req.query.dy
    }
    const distances = []

    dropouts.forEach(dropout => {
        const firstDistance = areas.getDistance(start, dropout) * START_TO_DROPOUT
        const secondDistance = areas.getDistance(dropout, dest) * DROPOUT_TO_DEST

        const totalDistance = firstDistance + secondDistance

        const distanceAndParking = totalDistance * dropout.areaValue

        distances.push(distanceAndParking)
    })

    res.send(distances)
})

module.exports = router