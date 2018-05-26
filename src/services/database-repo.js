const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectID
const url = 'mongodb://autopark:AXmTqYzyv13IS313MARx6dwcxr5hTAkfTAWk6AOtEPM8nQctUoLkaIW0cHPGtKxVtgzdy4CTcEOkvGerb8yHFA%3D%3D@autopark.documents.azure.com:10255/?ssl=true';
const assert = require('assert');

function getAreas(cb) {
    // Connects to mongo database
    MongoClient.connect(url, function(err, client) {
        if (err) {
            console.log('could not connect to db! \n');
            return cb(err);
        } else if (client.isConnected()) {
            console.log('Connected to db! \n');
            var dbo = client.db('autopark');
            dbo.collection('areas').find().toArray(function(error, docs) {
                client.close();
                if (error) {
                    console.log('Could not retreive areas');
                    return cb(error);
                }
                return cb(null, docs[0].areaList);
            });
        }
    });
}
module.exports = {
    getAreas
}