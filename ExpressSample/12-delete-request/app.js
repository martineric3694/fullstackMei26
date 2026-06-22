const express=require('express');
const app=express();

let users=[{id:1,nama:'Martin'}];

app.delete('/users/:id',(req,res)=>{
    users.splice(0,1);
    res.json(users)});

app.listen(3000);