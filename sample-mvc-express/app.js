const express = require('express');
const methodOverride = require('method-override');
const path = require('path');

const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// ── View Engine ──────────────────────────────────────────────
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ── Middleware ───────────────────────────────────────────────
app.use(express.urlencoded({ extended: true }));  // parse form POST
app.use(express.json());                           // parse JSON body
app.use(methodOverride('_method'));                // support PUT & DELETE via forms
app.use(express.static(path.join(__dirname, 'public'))); // static files (css, js)

// ── Routes ───────────────────────────────────────────────────
app.get('/', (req, res) => res.render('index', { title: 'Beranda' }));
app.use('/products', productRoutes);

// ── 404 Handler ──────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).render('error', {
    title: 'Halaman Tidak Ditemukan',
    message: `Route "${req.method} ${req.url}" tidak ditemukan.`,
  });
});

// ── Global Error Handler ─────────────────────────────────────
app.use((err, req, res, _next) => {
  console.error(err.stack);
  res.status(500).render('error', {
    title: 'Kesalahan Server',
    message: 'Terjadi kesalahan pada server. Silakan coba lagi.',
  });
});

// ── Start Server ─────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅ Server berjalan di http://localhost:${PORT}`);
  console.log(`   Mode: ${process.env.NODE_ENV || 'development'}`);
});
