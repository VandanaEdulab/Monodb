const dbConnect=require('./mongoConn');

async function Update(){
    const data=await dbConnect();
    let result= await data.updateOne(
        {name:"max pro 7"},{
            $set: { name:"max pro 8"}}
    );
  console.log(result+ "Updated" );
}
Update();






// let arr=[1,2,3,4,5,6,7];
// for(let i=0; i<arr.length;i=i+2){

//     console.log(arr[i]);
// }

