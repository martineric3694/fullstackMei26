const express = require('express');
const app = express();

app.get('/',require('./routes/userRoute'));

app.listen(3000);