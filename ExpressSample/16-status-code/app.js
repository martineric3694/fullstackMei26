const express=require('express');
const app=express();

app.get('/',(req,res)=>res.status(200).json({message:'OK'}));

app.post('/',(req,res)=>res.status(201).json({message:'Created'}));

app.listen(3000);