const express=require('express');
const app=express();

app.use((req,res,next)=>{
    console.log(req.method,req.url);
    next();
});

app.get('/',(req,res)=>res.send('Home'));

app.listen(3000);