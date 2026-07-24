// ============================================================
// File: app.js  –  Entry point Express MVC App
// ============================================================

require('dotenv').config();

const express        = require('express');
const cookieParser   = require('cookie-parser');
const methodOverride = require('method-override');
const path           = require('path');

// Import routes
const authRoutes    = require('./routes/auth');
const productRoutes = require('./routes/products');

const app  = express();
const PORT = process.env.PORT || 3000;

// ── View engine ────────────────────────────────────────────
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ── Middleware ──────────────────────────────────────────────
app.use(express.urlencoded({ extended: true })); // parse form body
app.use(express.json());                          // parse JSON body
app.use(cookieParser());                          // baca cookies
app.use(methodOverride('_method'));               // support PUT / DELETE via form
app.use(express.static(path.join(__dirname, 'public'))); // file statis

// ── Routes ──────────────────────────────────────────────────
app.get('/', (req, res) => res.redirect('/auth/login'));

app.use('/auth',     authRoutes);
app.use('/products', productRoutes);

// Dashboard (protected) – di-handle di productRoutes atau di sini
const { authMiddleware } = require('./middleware/auth');
app.get('/dashboard', authMiddleware, (req, res) => {
  res.render('dashboard', { title: 'Dashboard' });
});

// ── 404 handler ─────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).render('404', { title: '404 – Halaman Tidak Ditemukan' });
});

// ── Error handler ───────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Terjadi kesalahan server');
});

// ── Start server ─────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
});
