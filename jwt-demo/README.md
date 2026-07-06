# JWT Demo — Node.js & Express

Contoh penerapan JWT (JSON Web Token) sederhana untuk autentikasi REST API.

## Struktur Project

```
jwt-demo/
├── server.js
├── middleware/
│   └── auth.js         # Middleware verifikasi token
├── routes/
│   ├── auth.js         # Register & Login
│   └── protected.js    # Route yang dilindungi JWT
├── .env.example
├── .gitignore
└── package.json
```

## Instalasi

```bash
# 1. Masuk ke folder project
cd jwt-demo

# 2. Install dependencies
npm install

# 3. Buat file .env dari contoh
cp .env.example .env

# 4. Jalankan server
npm start
# atau pakai nodemon (auto-reload):
npm run dev
```

## Endpoint

| Method | URL | Keterangan | Auth |
|--------|-----|-----------|------|
| GET | `/` | Health check | Tidak |
| POST | `/auth/register` | Daftar user baru | Tidak |
| POST | `/auth/login` | Login, dapat token | Tidak |
| GET | `/api/profile` | Data profil user | **Ya** |
| GET | `/api/dashboard` | Data dashboard | **Ya** |

## Cara Pakai

### 1. Register

```bash
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username": "budi", "password": "password123"}'
```

### 2. Login

```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username": "budi", "password": "password123"}'
```

Respons:
```json
{
  "message": "Login berhasil",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### 3. Akses Route Dilindungi

Salin token dari respons login, lalu gunakan sebagai Bearer token:

```bash
curl http://localhost:3000/api/profile \
  -H "Authorization: Bearer <TOKEN_ANDA>"
```

## Alur Kerja JWT

```
Client                          Server
  |                               |
  |-- POST /auth/login ---------->|
  |                               | verifikasi username & password
  |<-- { token: "eyJ..." } -------|
  |                               |
  |-- GET /api/profile ---------->|
  |   Header: Bearer eyJ...       | verifyToken middleware
  |                               | decode & validasi token
  |<-- { data profil } -----------|
```

## Catatan Production

- Simpan `JWT_SECRET` di environment variable yang aman
- Gunakan HTTPS agar token tidak disadap
- Ganti array `users` dengan database sungguhan (MongoDB, PostgreSQL, dll)
- Pertimbangkan refresh token untuk sesi panjang
