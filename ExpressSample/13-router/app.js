const express=require('express');
const app=express();

app.use('/users',require('./routes/userRoutes'));
app.use('/products',require('./routes/productRoutes'))

app.listen(3000);