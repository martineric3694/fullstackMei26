const express=require('express');
const app=express();

app.get('/',(req,res,next)=>
    next(new Error('Terjadi Error')));

app.use((err,req,res,next)=>res.status(500).json({message:err.message}));

app.listen(3000);