const express = require('express');
const bcrypt = require('bcrypt');
const session = require('express-session');
const db = require('./config/database');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET || 'secret-key-change-this',
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: false, // set true jika menggunakan HTTPS
    maxAge: 24 * 60 * 60 * 1000 // 24 jam
  }
}));

// Middleware untuk cek autentikasi
const isAuthenticated = (req, res, next) => {
  if (req.session.userId) {
    next();
  } else {
    res.redirect('/login');
  }
};

// Routes

// Home page
app.get('/', (req, res) => {
  res.render('index', { user: req.session.userId });
});

// Register page
app.get('/register', (req, res) => {
  if (req.session.userId) {
    return res.redirect('/dashboard');
  }
  res.render('register', { error: null });
});

// Register POST
app.post('/register', async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  // Validasi input
  if (!username || !email || !password || !confirmPassword) {
    return res.render('register', { error: 'Semua field harus diisi' });
  }

  if (password !== confirmPassword) {
    return res.render('register', { error: 'Password tidak cocok' });
  }

  if (password.length < 6) {
    return res.render('register', { error: 'Password minimal 6 karakter' });
  }

  try {
    // Cek apakah username atau email sudah ada
    db.query('SELECT * FROM users WHERE username = ? OR email = ?', [username, email], async (err, results) => {
      if (err) {
        console.error(err);
        return res.render('register', { error: 'Terjadi kesalahan server' });
      }

      if (results.length > 0) {
        return res.render('register', { error: 'Username atau email sudah terdaftar' });
      }

      // Hash password dengan bcrypt
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      console.log('Password sebelum encyrpt '+ password + ' Password setelah encrypt '+ hashedPassword);

      // Insert user ke database
      db.query(
        'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
        [username, email, hashedPassword],
        (err, result) => {
          if (err) {
            console.error(err);
            return res.render('register', { error: 'Terjadi kesalahan saat registrasi' });
          }
          
          console.log(`User baru terdaftar: ${username}`);
          res.redirect('/login?registered=true');
        }
      );
    });
  } catch (error) {
    console.error(error);
    res.render('register', { error: 'Terjadi kesalahan saat hashing password' });
  }
});

// Login page
app.get('/login', (req, res) => {
  if (req.session.userId) {
    return res.redirect('/dashboard');
  }
  const registered = req.query.registered === 'true';
  res.render('login', { error: null, success: registered ? 'Registrasi berhasil! Silakan login.' : null });
});

// Login POST
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Validasi input
  if (!username || !password) {
    return res.render('login', { error: 'Username dan password harus diisi', success: null });
  }

  // Cari user di database
  db.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
    if (err) {
      console.error(err);
      return res.render('login', { error: 'Terjadi kesalahan server', success: null });
    }

    if (results.length === 0) {
      return res.render('login', { error: 'Username atau password salah', success: null });
    }

    const user = results[0];

    try {
      // Compare password dengan bcrypt
      const match = await bcrypt.compare(password, user.password);

      if (match) {
        // Password benar, buat session
        req.session.userId = user.id;
        req.session.username = user.username;
        console.log(`User login: ${user.username}`);
        res.redirect('/dashboard');
      } else {
        res.render('login', { error: 'Username atau password salah', success: null });
      }
    } catch (error) {
      console.error(error);
      res.render('login', { error: 'Terjadi kesalahan saat verifikasi password', success: null });
    }
  });
});

// Dashboard (protected route)
app.get('/dashboard', isAuthenticated, (req, res) => {
  db.query('SELECT username, email, created_at FROM users WHERE id = ?', [req.session.userId], (err, results) => {
    if (err || results.length === 0) {
      return res.redirect('/login');
    }
    res.render('dashboard', { user: results[0] });
  });
});

// Logout
app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
    }
    res.redirect('/');
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
