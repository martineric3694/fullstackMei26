const express=require('express');
const app=express();

app.use(express.json());
let users=[
    {id:1,nama:'Martin'}
];

app.put('/users/:id',(req,res)=>{
    users[0].nama=req.body.nama;
    res.json(users)
});

app.listen(3000);