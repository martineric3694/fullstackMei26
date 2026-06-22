const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    console.log(req.method,req.url);
    res.send('Request diterima');
});

app.listen(3000);