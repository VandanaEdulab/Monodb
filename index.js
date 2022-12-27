const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';

const client = new MongoClient(url);

const dbName = 'vandana';

async function main(){
    let clientCon=await client.connect();
    let db=clientCon.db(dbName);
    let collections=db.collection('table')
    let result=collections.find({name:'M40'}).toArray();
    // console.log(result);
    return result;
}
main()
.then(console.log)
.catch(console.error)

// .finally(() => client.close());