const express = require('express');
const mongodb = require('mongodb');
const dbConnect=require('./mongoConn');
const app = express();

app.get('/',async (req, res) => {
    const data=await dbConnect();
    let result= await data.find().toArray();
    res.send(result)
  })

  app.use(express.json());

  app.post('/',async (req, res) => {
    const data=await dbConnect();
    let result= await data.insert(req.body);
    res.send(result)
  });


  app.put('/',async (req, res) => {
    const data=await dbConnect();
    let result= await data.updateOne({name:"max pro 8"},{$set:req.body});
    res.send(result)
  });

  app.delete('/:id',async (req, res) => {
    const data=await dbConnect();
    let result= await data.deleteOne({_id:new mongodb.ObjectId(req.params.id) });
    res.send(result)
  });

  app.listen(4500);

 