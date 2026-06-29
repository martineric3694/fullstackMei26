const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use('/users',require('./routes/userRoute'));

app.listen(3000,() => console.log('Server jalan di http://localhost:3000'))