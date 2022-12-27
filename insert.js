const dbConnect=require('./mongoConn');
async function insert(){

    const dbs=await dbConnect();
    const result =await dbs.insert({name:'max7',brand:'micromax',price:200,category:'mobile'});

        console.log(result)
    }
    




insert();