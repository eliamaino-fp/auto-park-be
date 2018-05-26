var database = require('../services/database-repo.js');


function getAllAreas() {
    database.getAreas(function(err, areas) {
        console.log(areas)
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
                dropOuts.push(dropOut)
            })
        }
    })

    return dropOuts
}

function distanceFromDropOut(startingPoint, dropOut) {
    const a = startingPoint.xCoor - dropOut.xCoor
    const b = startingPoint.yCoor - dropOut.yCoor

    return Math.sqrt(a * a + b * b);
}

module.exports = {
    distanceFromDropOut,
    getAllAreas,
    getAllDropOuts
}