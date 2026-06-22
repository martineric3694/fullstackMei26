const express=require('express');
const app=express();

app.get('/users/:angka',(req,res)=>res.send(`User ID ${req.params.angka}`));

app.listen(3000);