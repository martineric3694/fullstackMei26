const jwt = require('jsonwebtoken');
require('dotenv').config();

/**
 * Middleware: verifikasi JWT dari cookie
 * Digunakan untuk melindungi route yang membutuhkan login.
 */
function authMiddleware(req, res, next) {
  const token = req.cookies?.token;

  if (!token) {
    return res.redirect('/auth/login');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // { id, name, email, role }
    res.locals.user = decoded; // tersedia di semua view EJS
    next();
  } catch (err) {
    res.clearCookie('token');
    return res.redirect('/auth/login');
  }
}

/**
 * Middleware: cegah user yang sudah login mengakses halaman login/register
 */
function guestMiddleware(req, res, next) {
  const token = req.cookies?.token;
  if (token) {
    try {
      jwt.verify(token, process.env.JWT_SECRET);
      return res.redirect('/dashboard');
    } catch {
      res.clearCookie('token');
    }
  }
  next();
}

module.exports = { authMiddleware, guestMiddleware };
