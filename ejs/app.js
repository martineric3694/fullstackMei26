const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const users = [
  { id: 1, name: 'Alice', role: 'Admin' },
  { id: 2, name: 'Bob',   role: 'User' },
  { id: 3, name: 'Carol', role: 'User' },
];

app.get('/', (req, res) => {
  res.render('index', { title: 'Daftar User', users });
});

app.get('/user/:id', (req, res) => {
  const user = users.find(u => u.id === Number(req.params.id));
  if (!user) return res.status(404).send('User tidak ditemukan');
  res.render('detail', { title: user.name, user });
});

app.listen(3000, () => console.log('Server jalan di http://localhost:3000'));
