const express=require('express');
const app=express();

app.get('/user',(req,res)=>
    res.json(
        { id:1,nama:'Martin' }
));

app.listen(3000);