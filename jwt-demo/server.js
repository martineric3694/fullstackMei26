require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

// Routes
app.use('/auth', require('./routes/auth'));
app.use('/api', require('./routes/protected'));

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'JWT Demo API berjalan!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
