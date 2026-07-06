const express = require('express');
const verifyToken = require('../middleware/auth');
const router = express.Router();

// GET /api/profile — butuh token
router.get('/profile', verifyToken, (req, res) => {
  res.json({
    message: 'Ini data rahasia!',
    user: req.user
  });
});

// GET /api/dashboard — butuh token
router.get('/dashboard', verifyToken, (req, res) => {
  res.json({
    message: `Selamat datang, ${req.user.username}!`,
    data: 'Data dashboard eksklusif'
  });
});

module.exports = router;
