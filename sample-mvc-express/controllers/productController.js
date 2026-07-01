const Product = require('../models/productModel');

/**
 * GET /products
 * Tampilkan semua produk, dengan opsi pencarian by name
 */
const index = (req, res) => {
  const { search } = req.query;
  let products;

  if (search && search.trim() !== '') {
    console.log(search.trim());
    products = Product.findByName(search.trim());
  } else {
    products = Product.findAll();
  }

  res.render('products/index', {
    title: 'Daftar Produk',
    products,
    search: search || '',
    message: req.query.message || null,
  });
};

/**
 * GET /products/:id
 * Tampilkan detail satu produk
 */
const show = (req, res) => {
  const product = Product.findById(req.params.id);

  if (!product) {
    return res.status(404).render('error', {
      title: 'Produk Tidak Ditemukan',
      message: `Produk dengan ID ${req.params.id} tidak ditemukan.`,
    });
  }

  res.render('products/show', {
    title: product.name,
    product,
  });
};

/**
 * GET /products/new
 * Tampilkan form tambah produk
 */
const newForm = (req, res) => {
  const kategori = ['Elektronik', 'Aksesori', 'Pakaian', 'Makanan', 'Lainnya'];
  res.render('products/form', {
    title: 'Tambah Produk',
    product: null,
    action: '/products',
    method: 'POST',
    errors: [],
    kategori,
  });
};

/**
 * POST /products
 * Simpan produk baru
 */
const create = (req, res) => {
  const { name, category, price, stock } = req.body;
  const errors = validateInput({ name, category, price, stock });

  if (errors.length > 0) {
    return res.render('products/form', {
      title: 'Tambah Produk',
      product: { name, category, price, stock },
      action: '/products',
      method: 'POST',
      errors,
    });
  }

  Product.create({ name, category, price, stock });
  res.redirect('/products?message=Produk berhasil ditambahkan');
};

/**
 * GET /products/:id/edit
 * Tampilkan form edit produk
 */
const editForm = (req, res) => {
  const product = Product.findById(req.params.id);
  const kategori = ['Elektronik', 'Aksesori', 'Pakaian', 'Makanan', 'Lainnya'];

  if (!product) {
    return res.status(404).render('error', {
      title: 'Produk Tidak Ditemukan',
      message: `Produk dengan ID ${req.params.id} tidak ditemukan.`,
    });
  }

  res.render('products/form', {
    title: 'Edit Produk',
    product,
    action: `/products/${product.id}?_method=PUT`,
    method: 'POST',
    errors: [],
    kategori,
  });
};

/**
 * PUT /products/:id
 * Update produk
 */
const update = (req, res) => {
  const { name, category, price, stock } = req.body;
  const errors = validateInput({ name, category, price, stock });

  if (errors.length > 0) {
    const product = Product.findById(req.params.id);
    return res.render('products/form', {
      title: 'Edit Produk',
      product: { ...product, name, category, price, stock },
      action: `/products/${req.params.id}?_method=PUT`,
      method: 'POST',
      errors,
    });
  }

  const updated = Product.update(req.params.id, { name, category, price, stock });

  if (!updated) {
    return res.status(404).render('error', {
      title: 'Gagal Update',
      message: `Produk dengan ID ${req.params.id} tidak ditemukan.`,
    });
  }

  res.redirect('/products?message=Produk berhasil diperbarui');
};

/**
 * DELETE /products/:id
 * Hapus produk
 */
const destroy = (req, res) => {
  const deleted = Product.remove(req.params.id);

  if (!deleted) {
    return res.status(404).render('error', {
      title: 'Gagal Hapus',
      message: `Produk dengan ID ${req.params.id} tidak ditemukan.`,
    });
  }

  res.redirect('/products?message=Produk berhasil dihapus');
};

// --- Helper ---
const validateInput = ({ name, category, price, stock }) => {
  const errors = [];
  if (!name || name.trim() === '') errors.push('Nama produk wajib diisi.');
  if (!category || category.trim() === '') errors.push('Kategori wajib diisi.');
  if (!price || isNaN(price) || parseInt(price) < 0) errors.push('Harga harus berupa angka positif.');
  if (!stock || isNaN(stock) || parseInt(stock) < 0) errors.push('Stok harus berupa angka positif.');
  return errors;
};

module.exports = { index, show, newForm, create, editForm, update, destroy };
