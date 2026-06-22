const express=require('express');
const app=express();

app.get('/products',(req,res)=>
    res.json(req.query)
    // console.log(req.query.id)
);

app.listen(3000);