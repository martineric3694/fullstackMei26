const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const router = express.Router();

const SECRET_KEY = process.env.JWT_SECRET || 'rahasia-super-aman';

// Simulasi database (gunakan DB sungguhan di production)
const users = [];

// POST /auth/register
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username dan password wajib diisi' });
  }

  const userExists = users.find(u => u.username === username);
  if (userExists) {
    return res.status(409).json({ message: 'Username sudah digunakan' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ id: users.length + 1, username, password: hashedPassword });

  res.status(201).json({ message: 'Registrasi berhasil' });
});

// POST /auth/login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username dan password wajib diisi' });
  }

  const user = users.find(u => u.username === username);
  if (!user) {
    return res.status(401).json({ message: 'Username atau password salah' });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: 'Username atau password salah' });
  }

  // Buat token JWT
  const token = jwt.sign(
    { id: user.id, username: user.username }, // payload
    SECRET_KEY,
    { expiresIn: '1h' }                        // kedaluwarsa 1 jam
  );

  res.json({ message: 'Login berhasil', token });
});

module.exports = router;
