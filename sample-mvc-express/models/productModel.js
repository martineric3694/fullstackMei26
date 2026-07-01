/**
 * Dummy Model — in-memory data store (tidak menggunakan database)
 * Simulasi operasi CRUD menggunakan array JavaScript.
 */

let products = [
  { id: 1, name: 'Laptop Pro 15"', category: 'Elektronik', price: 15000000, stock: 10 },
  { id: 2, name: 'Mouse Wireless', category: 'Aksesori', price: 250000, stock: 50 },
  { id: 3, name: 'Mechanical Keyboard', category: 'Aksesori', price: 850000, stock: 30 },
  { id: 4, name: 'Monitor 24"', category: 'Elektronik', price: 3200000, stock: 15 },
  { id: 5, name: 'Webcam HD', category: 'Elektronik', price: 500000, stock: 20 },
];

let nextId = 6; // auto-increment id

/**
 * Ambil semua produk
 * @returns {Array} array semua produk
 */
const findAll = () => {
  return [...products];
};

/**
 * Cari produk berdasarkan id
 * @param {number} id
 * @returns {Object|null} produk atau null jika tidak ditemukan
 */
const findById = (id) => {
  return products.find((p) => p.id === parseInt(id)) || null;
};

/**
 * Cari produk berdasarkan nama (partial search, case-insensitive)
 * @param {string} keyword
 * @returns {Array} array produk yang cocok
 */
const findByName = (keyword) => {
  const lower = keyword.toLowerCase();
  return products.filter((p) => p.name.toLowerCase().includes(lower));
};

/**
 * Tambah produk baru
 * @param {Object} data - { name, category, price, stock }
 * @returns {Object} produk yang baru dibuat
 */
const create = (data) => {
  const newProduct = {
    id: nextId++,
    name: data.name,
    category: data.category,
    price: parseInt(data.price),
    stock: parseInt(data.stock),
  };
  products.push(newProduct);
  return newProduct;
};

/**
 * Update produk berdasarkan id
 * @param {number} id
 * @param {Object} data - field yang diupdate
 * @returns {Object|null} produk setelah update atau null
 */
const update = (id, data) => {
  const index = products.findIndex((p) => p.id === parseInt(id));
  if (index === -1) return null;

  products[index] = {
    ...products[index],
    name: data.name,
    category: data.category,
    price: parseInt(data.price),
    stock: parseInt(data.stock),
  };
  return products[index];
};

/**
 * Hapus produk berdasarkan id
 * @param {number} id
 * @returns {boolean} true jika berhasil, false jika tidak ditemukan
 */
const remove = (id) => {
  const index = products.findIndex((p) => p.id === parseInt(id));
  if (index === -1) return false;
  products.splice(index, 1);
  return true;
};

module.exports = { findAll, findById, findByName, create, update, remove };
