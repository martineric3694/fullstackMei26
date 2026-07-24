const Product = require('../models/Product');

const ProductController = {
  // ----------------------------------------------------------------
  // GET /products  → tampilkan daftar semua produk
  // ----------------------------------------------------------------
  async index(req, res) {
    try {
      const products = await Product.findAll();
      res.render('products/index', {
        title: 'Daftar Produk',
        products
      });
    } catch (err) {
      console.error('Product index error:', err);
      res.status(500).send('Terjadi kesalahan server');
    }
  },

  // ----------------------------------------------------------------
  // GET /products/create  → tampilkan form tambah produk
  // ----------------------------------------------------------------
  showCreate(req, res) {
    res.render('products/create', { title: 'Tambah Produk', error: null });
  },

  // ----------------------------------------------------------------
  // POST /products  → simpan produk baru
  // ----------------------------------------------------------------
  async store(req, res) {
    const { name, description, price, stock } = req.body;

    // Validasi sederhana
    if (!name || !price) {
      return res.render('products/create', {
        title: 'Tambah Produk',
        error: 'Nama dan harga wajib diisi'
      });
    }

    try {
      await Product.create({
        name,
        description: description || '',
        price:   parseFloat(price),
        stock:   parseInt(stock, 10) || 0,
        user_id: req.user.id
      });
      res.redirect('/products');
    } catch (err) {
      console.error('Product store error:', err);
      res.render('products/create', {
        title: 'Tambah Produk',
        error: 'Terjadi kesalahan server'
      });
    }
  },

  // ----------------------------------------------------------------
  // GET /products/:id/edit  → tampilkan form edit produk
  // ----------------------------------------------------------------
  async showEdit(req, res) {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) return res.status(404).send('Produk tidak ditemukan');

      res.render('products/edit', { title: 'Edit Produk', product, error: null });
    } catch (err) {
      console.error('Product showEdit error:', err);
      res.status(500).send('Terjadi kesalahan server');
    }
  },

  // ----------------------------------------------------------------
  // PUT /products/:id  → update produk
  // ----------------------------------------------------------------
  async update(req, res) {
    const { name, description, price, stock } = req.body;

    if (!name || !price) {
      const product = await Product.findById(req.params.id);
      return res.render('products/edit', {
        title: 'Edit Produk',
        product,
        error: 'Nama dan harga wajib diisi'
      });
    }

    try {
      await Product.update(req.params.id, {
        name,
        description: description || '',
        price:  parseFloat(price),
        stock:  parseInt(stock, 10) || 0
      });
      res.redirect('/products');
    } catch (err) {
      console.error('Product update error:', err);
      res.status(500).send('Terjadi kesalahan server');
    }
  },

  // ----------------------------------------------------------------
  // DELETE /products/:id  → hapus produk
  // ----------------------------------------------------------------
  async destroy(req, res) {
    try {
      await Product.delete(req.params.id);
      res.redirect('/products');
    } catch (err) {
      console.error('Product destroy error:', err);
      res.status(500).send('Terjadi kesalahan server');
    }
  }
};

module.exports = ProductController;
