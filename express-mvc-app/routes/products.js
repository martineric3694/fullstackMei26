// ============================================================
// File: routes/products.js
// ============================================================

const express           = require('express');
const router            = express.Router();
const ProductController = require('../controllers/ProductController');
const { authMiddleware } = require('../middleware/auth');

// Semua route produk butuh login
router.use(authMiddleware);

// GET    /products           → daftar produk
router.get('/',            ProductController.index);

// GET    /products/create    → form tambah produk
router.get('/create',      ProductController.showCreate);

// POST   /products           → simpan produk baru
router.post('/',           ProductController.store);

// GET    /products/:id/edit  → form edit produk
router.get('/:id/edit',    ProductController.showEdit);

// PUT    /products/:id       → update produk
router.put('/:id',         ProductController.update);

// DELETE /products/:id       → hapus produk
router.delete('/:id',      ProductController.destroy);

module.exports = router;
