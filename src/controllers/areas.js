var database = require('../services/database-repo.js');


function getAllAreas(cb) {
    database.getAreas(function(err, areas) {
        if (err)
            return err;
        return cb(null, areas);
    })
}

function onAreaReturn(err, areas) {
    if (err) {
        console.log('Error occurred while getting areas : ' + err + '\n');
    } else {
        console.log(areas);
        return areas;
    }
}

function onConnect(err, client) {
    if (err) {
        console.log('Error while connecting to database : ' + err);
    }
    console.log('Connection to database was successful \n');
    database.getAreas(client, onAreaReturn);
}

function onConnectError(err) {
    console.log("Connecting to database had error :" + err.message + '\n');
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

    areas.forEach(area => {
        if (area.dropOuts && area.dropOuts.length > 0) {
            area.dropOuts.forEach(dropOut => {
                dropOuts.push(dropOut)
            })
        }
    })

    return dropOuts
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