const bcrypt = require('bcryptjs');
const jwt    = require('jsonwebtoken');
const User   = require('../models/User');
require('dotenv').config();

const AuthController = {
  // ----------------------------------------------------------------
  // GET /auth/login  → tampilkan form login
  // ----------------------------------------------------------------
  showLogin(req, res) {
    res.render('auth/login', { title: 'Login', error: null, query: req.query });
  },

  // ----------------------------------------------------------------
  // POST /auth/login  → proses login
  // ----------------------------------------------------------------
  async login(req, res) {
    const { email, password } = req.body;

    try {
      // 1. Cari user berdasarkan email
      const user = await User.findByEmail(email);
      if (!user) {
        return res.render('auth/login', {
          title: 'Login',
          error: 'Email atau password salah',
          query: {}
        });
      }

      // 2. Verifikasi password dengan bcrypt
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return res.render('auth/login', {
          title: 'Login',
          error: 'Email atau password salah',
          query: {}
        });
      }

      // 3. Buat JWT token
      const token = jwt.sign(
        { id: user.id, name: user.name, email: user.email, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN || '1d' }
      );

      // 4. Simpan token di httpOnly cookie
      res.cookie('token', token, {
        httpOnly: true,
        secure:   process.env.NODE_ENV === 'production',
        maxAge:   24 * 60 * 60 * 1000 // 1 hari
      });

      res.redirect('/dashboard');
    } catch (err) {
      console.error('Login error:', err);
      res.render('auth/login', { title: 'Login', error: 'Terjadi kesalahan server', query: {} });
    }
  },

  // ----------------------------------------------------------------
  // GET /auth/register  → tampilkan form register
  // ----------------------------------------------------------------
  showRegister(req, res) {
    res.render('auth/register', { title: 'Register', error: null });
  },

  // ----------------------------------------------------------------
  // POST /auth/register  → proses register
  // ----------------------------------------------------------------
  async register(req, res) {
    const { name, email, password, confirmPassword } = req.body;

    // Validasi sederhana
    if (password !== confirmPassword) {
      return res.render('auth/register', {
        title: 'Register',
        error: 'Password dan konfirmasi password tidak cocok'
      });
    }

    try {
      // Cek apakah email sudah terdaftar
      const existing = await User.findByEmail(email);
      if (existing) {
        return res.render('auth/register', {
          title: 'Register',
          error: 'Email sudah terdaftar'
        });
      }

      // Hash password dengan bcrypt (salt rounds = 10)
      const hashed = await bcrypt.hash(password, 10);

      await User.create({ name, email, password: hashed });

      res.redirect('/auth/login?registered=1');
    } catch (err) {
      console.error('Register error:', err);
      res.render('auth/register', { title: 'Register', error: 'Terjadi kesalahan server' });
    }
  },

  // ----------------------------------------------------------------
  // GET /auth/logout  → hapus cookie dan redirect ke login
  // ----------------------------------------------------------------
  logout(req, res) {
    res.clearCookie('token');
    res.redirect('/auth/login');
  }
};

module.exports = AuthController;
