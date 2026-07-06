# Bcrypt Authentication dengan Express, EJS, dan MySQL

Contoh implementasi sistem autentikasi pengguna menggunakan **bcrypt** untuk enkripsi password yang aman, dibangun dengan Express.js, EJS, dan MySQL.

## Fitur

- Registrasi pengguna dengan validasi input
- Hashing password dengan bcrypt (salt rounds: 10)
- Login dengan verifikasi password bcrypt
- Session management untuk autentikasi
- Dashboard yang dilindungi (protected route)
- Logout

## Teknologi

| Teknologi | Kegunaan |
|-----------|----------|
| Express.js | Web framework |
| EJS | Template engine |
| bcrypt | Hashing password |
| mysql2 | Koneksi MySQL |
| express-session | Session management |
| dotenv | Environment variables |

## Struktur Project

```
.
├── app.js                  # File server utama
├── package.json
├── .env.example            # Template environment variables
├── .gitignore
├── config/
│   └── database.js         # Konfigurasi koneksi MySQL
├── database/
│   └── schema.sql          # Schema database
└── views/
    ├── index.ejs           # Halaman home
    ├── register.ejs        # Form registrasi
    ├── login.ejs           # Form login
    └── dashboard.ejs       # Dashboard user
```

## Cara Menjalankan

### 1. Clone atau download project ini

### 2. Install dependencies

```bash
npm install
```

### 3. Setup database MySQL

Jalankan query SQL berikut di MySQL client Anda:

```bash
mysql -u root -p < database/schema.sql
```

Atau buka MySQL client dan jalankan isi file `database/schema.sql` secara manual.

### 4. Konfigurasi environment variables

Salin file `.env.example` menjadi `.env`:

```bash
cp .env.example .env
```

Edit file `.env` sesuai konfigurasi Anda:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password_mysql_anda
DB_NAME=auth_db
DB_PORT=3306

SESSION_SECRET=ganti_dengan_string_random_yang_panjang
PORT=3000
```

### 5. Jalankan server

Mode development (dengan auto-reload):
```bash
npm run dev
```

Mode production:
```bash
npm start
```

### 6. Buka di browser

Akses aplikasi di: **http://localhost:3000**

## Penjelasan Bcrypt

### Hashing Password (Registrasi)

```javascript
const saltRounds = 10;
const hashedPassword = await bcrypt.hash(password, saltRounds);
// hashedPassword tersimpan di database, bukan password asli
```

### Verifikasi Password (Login)

```javascript
const match = await bcrypt.compare(password, hashedPassword);
// match = true jika password benar, false jika salah
```

### Mengapa Bcrypt?

- **Salt otomatis**: bcrypt menambahkan salt secara otomatis sehingga hash yang sama tidak menghasilkan output yang sama
- **Work factor**: `saltRounds=10` membuat proses hashing lambat secara intentional, mempersulit brute-force attack
- **Satu arah**: hash tidak bisa di-dekripsi kembali ke password asli

## Routes

| Method | Route | Deskripsi |
|--------|-------|-----------|
| GET | `/` | Home page |
| GET | `/register` | Form registrasi |
| POST | `/register` | Proses registrasi |
| GET | `/login` | Form login |
| POST | `/login` | Proses login |
| GET | `/dashboard` | Dashboard (butuh login) |
| GET | `/logout` | Logout |
