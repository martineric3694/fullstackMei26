// ============================================================
// File: routes/auth.js
// ============================================================

const express        = require('express');
const router         = express.Router();
const AuthController = require('../controllers/AuthController');
const { guestMiddleware } = require('../middleware/auth');

// GET  /auth/login    → tampilkan form login
router.get('/login',    guestMiddleware, AuthController.showLogin);

// POST /auth/login    → proses login
router.post('/login',   guestMiddleware, AuthController.login);

// GET  /auth/register → tampilkan form register
router.get('/register', guestMiddleware, AuthController.showRegister);

// POST /auth/register → proses register
router.post('/register', guestMiddleware, AuthController.register);

// GET  /auth/logout   → logout
router.get('/logout', AuthController.logout);

module.exports = router;
