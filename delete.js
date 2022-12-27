const dbConnect=require('./mongoConn');

async function Delete(){
    const data=await dbConnect();
    let result= await data.deleteOne({name:'M40'})
    console.log(result)
}
Delete();