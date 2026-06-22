const express=require('express');
const app=express();

app.use(express.json());
app.post('/users',(req,res)=>
    res.json(req.body)
    // console.log(req.body.nama)
);

app.listen(3000);