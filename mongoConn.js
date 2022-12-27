const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';

const client = new MongoClient(url);

const dbName = 'vandana';

async function dbConnect(){
    let clientCon=await client.connect();
    let db=clientCon.db(dbName);
    return db.collection('table');

    }

   module.exports =dbConnect;