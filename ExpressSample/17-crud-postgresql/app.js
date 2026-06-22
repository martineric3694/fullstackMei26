const express=require('express');
const app=express();
app.use('/users',require('./routes/userRoutes'));

app.listen(3000);