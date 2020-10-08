const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const Url = 'mongodb://localhost:27017';
const dbname = 'Confusion';
MongoClient.connect(Url, (err, client) => {
    assert.equal(err, null);
    console.log('connection correctly to server');
    const db = client.db(dbname);
    const collection = db.collection('dishes');
    collection.insertOne({
        "name": "Rana",
        "dissert": "Abc"
    }, (err, result) => {

        assert.equal(err, null);
        console.log('After Insert:\n');
        console.log(result.ops);
        collection.find({}).toArray((err, docs) => {
            assert.equal(err, null);
            console.log('Found:\n');
            console.log(docs);
            db.dropCollection('dishes', (err, result) => {
                assert.equal(err, null);
                client.close();
            })
        });

    });


});