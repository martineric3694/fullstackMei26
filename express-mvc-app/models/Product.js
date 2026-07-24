const db = require('../config/database');

const Product = {
  /**
   * Ambil semua produk (dengan nama pemilik)
   */
  async findAll() {
    const [rows] = await db.query(`
      SELECT p.*, u.name AS owner_name
      FROM products p
      JOIN users u ON p.user_id = u.id
      ORDER BY p.created_at DESC
    `);
    return rows;
  },

  /**
   * Ambil produk berdasarkan ID
   */
  async findById(id) {
    const [rows] = await db.query(
      'SELECT * FROM products WHERE id = ? LIMIT 1',
      [id]
    );
    return rows[0] || null;
  },

  /**
   * Buat produk baru
   */
  async create({ name, description, price, stock, user_id }) {
    const [result] = await db.query(
      'INSERT INTO products (name, description, price, stock, user_id) VALUES (?, ?, ?, ?, ?)',
      [name, description, price, stock, user_id]
    );
    return result.insertId;
  },

  /**
   * Update produk
   */
  async update(id, { name, description, price, stock }) {
    await db.query(
      'UPDATE products SET name = ?, description = ?, price = ?, stock = ? WHERE id = ?',
      [name, description, price, stock, id]
    );
  },

  /**
   * Hapus produk
   */
  async delete(id) {
    await db.query('DELETE FROM products WHERE id = ?', [id]);
  }
};

module.exports = Product;
