const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// GET  /products          — list semua produk (+ search query)
router.get('/', productController.index);

// GET  /products/new      — form tambah produk
router.get('/new', productController.newForm);

// POST /products          — simpan produk baru
router.post('/', productController.create);

// GET  /products/:id      — detail produk
router.get('/:id', productController.show);

// GET  /products/:id/edit — form edit produk
router.get('/:id/edit', productController.editForm);

// PUT  /products/:id      — update produk (via method-override)
router.put('/:id', productController.update);

// DELETE /products/:id   — hapus produk (via method-override)
router.delete('/:id', productController.destroy);

module.exports = router;
